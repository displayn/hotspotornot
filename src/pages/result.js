import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { search } from '../services/Api'
import {
  Title,
  Section,
  LockdownMeasures,
  Header,
  LoadingIndicator,
  PageHead,
  NoResultsWrapper,
  Footer,
} from '../components'
import { RISK_LEVELS } from '../constants'
import { hasHigherRiskLevel, mapRiskLevel } from '../services/RiskLevels'

const IndexLink = styled.a`
  display: inline-block;
  padding: 16px;
  background: white;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
  color: #1d1d1f;
  width: 100%;

  @media screen and (min-width: 450px) {
    width: 200px;
  }
`

const IncidenceValue = styled.h2`
  font-weight: bold;
`

const Result = () => {
  const router = useRouter()
  const coords = router.query.coords || []
  const { isError, data } = useQuery(
    ['area', coords],
    () => search(coords[0], coords[1]),
    {
      enabled: !!coords,
      retry: false,
      onSuccess: (data) => {
        router.replace(
          {
            pathname: '/result',
            query: { coords },
          },
          `/s/${data.area}`,
          { shallow: true }
        )
      },
    }
  )

  if (!data) {
    return (
      <>
        <PageHead title="Laden..." />
        <LoadingIndicator />
        <Footer />
      </>
    )
  }

  if (isError) {
    return (
      <>
        <PageHead title="Keine Daten" />

        <NoResultsWrapper>
          <Section>
            <Title>Das RKI hat leider keine Daten für den Standort.</Title>
          </Section>
        </NoResultsWrapper>

        <Footer />
      </>
    )
  }

  const { area, cases7Per100k, state, lastUpdated } = data

  const riskLevel = mapRiskLevel(cases7Per100k)
  const message = hasHigherRiskLevel(riskLevel, RISK_LEVELS.medium)
    ? `${area} ist ein Covid-19 Hotspot.`
    : `${area} ist kein Covid-19 Hotspot.`

  return (
    <>
      <PageHead title={message} />

      <main>
        <Header riskLevel={riskLevel} inversed>
          <Title>{message}</Title>
          <IncidenceValue>
            Die 7-Tage-Inzidenz liegt aktuell bei{' '}
            {cases7Per100k.toLocaleString('de-DE', {
              maximumFractionDigits: 2,
            })}
            .
          </IncidenceValue>
          <small>Daten vom {lastUpdated}</small>

          <div style={{ marginTop: '48px' }}>
            <Link href="/" passHref>
              <IndexLink>Neue Suche</IndexLink>
            </Link>
          </div>
        </Header>

        <LockdownMeasures area={area} state={state} riskLevel={riskLevel} />
      </main>

      <Footer />
    </>
  )
}

export default Result
