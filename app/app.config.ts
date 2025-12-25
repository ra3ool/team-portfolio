export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://avatars.githubusercontent.com/u/97020795',
      light: 'https://avatars.githubusercontent.com/u/97020795',
      alt: 'My profile picture'
    },
    meetingLink: 'tel:09331216757',
    email: 'mahsa.ba.askari@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description:
          'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Lee-One Team • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-telegram',
        'to': 'tg://resolve?domain=mahsa_prode',
        'target': '_blank',
        'aria-label': 'Nuxt on Discord'
      },
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/mahsa-askari-926484117',
        'target': '_blank',
        'aria-label': 'Nuxt on X'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/askari-mahsa',
        'target': '_blank',
        'aria-label': 'Nuxt UI on GitHub'
      }
    ]
  }
})
