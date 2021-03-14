export const measures = [
  {
    title: 'Private Kontakte',
    variants: [
      {
        description:
          'Treffen sind mit bis zu zehn Personen aus drei verschiedenen Haushalten erlaubt. Paare gelten als ein Haushalt. Kinder bis 14 Jahre werden nicht mitgezählt.',
        minIncidence: 0,
        maxIncidence: 35,
      },
      {
        description:
          'Treffen sind mit bis zu fünf Personen aus zwei verschiedenen Haushalten erlaubt. Paare gelten als ein Haushalt. Kinder bis 14 Jahre werden nicht mitgezählt.',
        minIncidence: 35,
        maxIncidence: 100,
      },
      {
        description:
          'Bleibt der Inzidenzwert über einen Zeitraum von drei Tagen über einem Wert von 100, dann ist das Treffen eines Haushaltes mit einer weiteren Person erlaubt.',
        minIncidence: 100,
        maxIncidence: Infinity,
      },
    ],
  },
  {
    title: 'Schulen & Kitas',
    description:
      'Kinder sollen in dieser Zeit wann immer möglich zu Hause betreut werden. In Kitas ist aber eine Notfallbetreuung möglich. Die Öffnung der Schulen variiert pro Bundesland, eine gute Übersicht lässt sich <a href="https://deutsches-schulportal.de/bildungswesen/schulschliessungen-corona-werden-die-schulen-wieder-geschlossen/">hier</a> finden.',
  },
  {
    title: 'Buchhandlungen, Blumengeschäfte & Gartenmärkte',
    variants: [
      {
        description:
          'Geschäfte dieser Kategorie dürfen wieder öffnen. Jedoch gibt es eine Begrenzung auf einen Kunden pro zehn Quadratmeter für die ersten 800 Quadratmeter Verkaufsfläche und einen weiteren für jede weiteren 20 Quadratmeter.',
        minIncidence: 0,
        maxIncidence: 100,
      },
      {
        description:
          'Bleibt der Inzidenzwert über einen Zeitraum von drei Tagen über einem Wert von 100, dann müssen Buchhandlungen, Blumengeschäfte & Gartenmärkte wieder schließen.',
        minIncidence: 100,
        maxIncidence: Infinity,
      },
    ],
  },
  {
    title: 'Körpernahe Dienstleistungen',
    variants: [
      {
        description:
          'Körpernahe Dienstleistungen dürfen wieder stattfinden. Wenn nicht permanent eine Maske getragen wird, muss ein tagesaktueller Schnelltest vorliegen und ein Testkonzept für das Personal existieren.',
        minIncidence: 0,
        maxIncidence: 100,
      },
      {
        description:
          'Bleibt der Inzidenzwert über einen Zeitraum von drei Tagen über einem Wert von 100, dann müssen körpernahe Dienstleistungen wieder schließen.',
        minIncidence: 100,
        maxIncidence: Infinity,
      },
    ],
  },
  {
    title: 'Fahr- und Flugschulen',
    variants: [
      {
        description:
          'Fahr- und Flugschulen dürfen wieder öffnen. Wenn nicht permanent eine Maske getragen wird, muss ein tagesaktueller Schnelltest vorliegen und ein Testkonzept für das Personal existieren.',
        minIncidence: 0,
        maxIncidence: 100,
      },
      {
        description:
          'Bleibt der Inzidenzwert über einen Zeitraum von 3 Tagen über einem Wert von 100, dann müssen Fahr- und Flugschulen wieder schließen.',
        minIncidence: 100,
        maxIncidence: Infinity,
      },
    ],
  },
  {
    title: 'Einzelhandel',
    description: '',
    variants: [
      {
        description:
          'Der Einzelhandel kann mit einer Begrenzung von einem Kunden pro zehn Quadratmetern für die ersten 800 Quadratmetern Verkaufsfläche und einem weiteren für jede weiteren 20 Quadratmetern öffnen.',
        minIncidence: 0,
        maxIncidence: 50,
      },
      {
        description:
          'Der Einzelhandel darf mit bestimmten Einkaufsterminen öffnen. Jeweils ein Kunde pro 40 Quadratmeter Verkaufsfläche darf nach Anmeldung in einem bestimmten Zeitraum einkaufen.',
        minIncidence: 50,
        maxIncidence: 100,
      },
      {
        description:
          'Bleibt der Inzidenzwert über einen Zeitraum von drei Tagen über einem Wert von 100, dann wird der Einzelhandel wieder schließen.',
        minIncidence: 100,
        maxIncidence: Infinity,
      },
    ],
  },
  {
    title: 'Friseure',
    description: 'Die Friseure sind regulär geöffnet.',
  },
  {
    title: 'Museen, Galerien, Zoos, botanische Gärten & Gedenkstätten',
    variants: [
      {
        description:
          'Museen, Galerien, Zoos, botanische Gärten & Gedenkstätten dürfen öffnen',
        minIncidence: 0,
        maxIncidence: 50,
      },
      {
        description:
          'Museen, Galerien, Zoos, botanische Gärten & Gedenkstätten dürfen besucht werden, wenn Gäste vorher einen Termin gebucht haben.',
        minIncidence: 50,
        maxIncidence: 100,
      },
      {
        description:
          'Bleibt der Inzidenzwert über einen Zeitraum von drei Tagen über einem Wert von 100, dann müssen Museen, Galerien, Zoos, botanische Gärten & Gedenkstätten wieder schließen.',
        minIncidence: 100,
        maxIncidence: Infinity,
      },
    ],
  },
  {
    title: 'Außensport',
    variants: [
      {
        minIncidence: 0,
        maxIncidence: 50,
        description:
          'Außensport ist mit maximal 10 Personen möglich, solange dieser kontaktlos erfolgt.',
      },
      {
        minIncidence: 50,
        maxIncidence: 100,
        description:
          'Individualsport ist draußen möglich, mit maximal fünf Personen aus zwei Haushalten oder maximal 20 Kindern.',
      },
      {
        description:
          'Bleibt der Inzidenzwert über einen Zeitraum von drei Tagen über einem Wert von 100, dann ist Außensport eines Haushalts mit einer weiteren Person erlaubt.',
        minIncidence: 100,
        maxIncidence: Infinity,
      },
    ],
  },
  {
    title: 'Maskenpflicht',
    description:
      'Überall, wo sich Menschen näher kommen, soll eine Maske getragen werden. Beim Einkaufen und im öffentlichen Personennahverkehr muss eine medizinische Maske getragen werden.',
  },
  {
    title: 'Gastronomie',
    description:
      'Restaurants sowie Bars, Clubs, Diskotheken, Kneipen und ähnliche Einrichtungen bleiben geschlossen. Davon ausgenommen sind die Lieferung und Abholung von Speisen für den Verzehr zu Hause.',
  },
  {
    title: 'Homeoffice',
    description:
      'Arbeitgeber*Innen müssen künftig überall, wo es möglich ist, Arbeiten im Homeoffice ermöglichen.',
  },
  {
    title: 'Kino, Theater, Opern, Konzerthäuser',
    description:
      'Alle Theater, Kino, Opern- und Konzerthäuser sowie ähnliche Einrichtungen bleiben geschlossen.',
  },
]
