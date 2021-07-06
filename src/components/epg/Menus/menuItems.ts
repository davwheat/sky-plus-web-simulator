import { Genres } from '@constants/Genres'
import { getFirstChannelNumber } from '@data/epg/AllChannels'
import { navigate } from 'gatsby'
import querystring from 'query-string'
import { ListItem } from '../Menu'

function navigateToEpg(genre?: Genres) {
  const startingNumber = getFirstChannelNumber(genre)

  const query = {
    start: startingNumber,
    genre,
  }

  getFirstChannelNumber(genre)

  navigate(`/epg/channel-list/?${querystring.stringify(query, { skipNull: true })}`)
}

export const tvGuideListItems: ListItem[] = [
  {
    text: 'All Channels',
    onClick: () => {
      navigateToEpg()
    },
  },
  {
    text: 'Entertainment',
    onClick: () => {
      navigateToEpg(Genres.Entertainment)
    },
  },
  {
    text: 'Lifestyle & Culture',
    onClick: () => {
      navigateToEpg(Genres.LifestyleAndCulture)
    },
  },
  {
    text: 'Movies',
    onClick: () => {
      navigateToEpg(Genres.Movies)
    },
  },
  {
    text: 'Sports',
    onClick: () => {
      navigateToEpg(Genres.Sports)
    },
  },
  {
    text: 'News',
    onClick: () => {
      navigateToEpg(Genres.News)
    },
  },
  {
    text: 'Documentaries',
    onClick: () => {
      navigateToEpg(Genres.Documentaries)
    },
  },
  {
    text: 'Kids',
    onClick: () => {
      navigateToEpg(Genres.Kids)
    },
  },
  {
    text: 'Music',
    onClick: () => {
      navigateToEpg(Genres.Music)
    },
  },
  {
    text: 'Radio',
    onClick: () => {
      navigateToEpg(Genres.Radio)
    },
  },
  {
    text: 'Shopping',
    onClick: () => {
      navigateToEpg(Genres.Shopping)
    },
  },
  {
    text: 'Religion',
    onClick: () => {
      navigateToEpg(Genres.Religion)
    },
  },
  {
    text: 'International',
    onClick: () => {
      navigateToEpg(Genres.International)
    },
  },
  {
    text: 'Gaming & Dating',
    onClick: () => {
      navigateToEpg(Genres.GamingAndDating)
    },
  },
  {
    text: 'Specialist',
    onClick: () => {
      navigateToEpg(Genres.Specialist)
    },
  },
  {
    text: 'Adult',
    onClick: () => {
      navigateToEpg(Genres.Adult)
    },
  },
]

export const boxOfficeListItems: ListItem[] = [
  {
    text: 'Movies by start time',
    onClick: () => {},
  },
  {
    text: 'Movies A–Z',
    onClick: () => {},
  },
  {
    text: 'New movies',
    onClick: () => {},
  },
  {
    text: 'Sports & Events',
    onClick: () => {},
  },
  {
    text: 'Previews',
    onClick: () => {},
  },
  {
    text: 'Adult Pay–Per–Night',
    onClick: () => {},
  },
  {
    text: 'Adult movies',
    onClick: () => {},
  },
]

export const servicesListItems: ListItem[] = [
  {
    text: 'Using Sky+',
    onClick: () => {
      navigate('/services/using-sky-plus')
    },
  },
  {
    text: 'Telephone numbers',
    onClick: () => {
      navigate('/services/telephone-numbers')
    },
  },
  {
    text: 'Parental control',
    onClick: () => {},
  },
  {
    text: 'System setup',
    onClick: () => {},
  },
  {
    text: 'Sky+ Setup',
    onClick: () => {
      navigate('/services/sky-plus-setup')
    },
  },
  {
    text: 'Anytime Setup',
    onClick: () => {},
  },
  {
    text: 'Auto Standby',
    onClick: () => {},
  },
  {
    text: 'Manual Recording',
    onClick: () => {},
  },
  {
    text: 'Favourite Channels',
    onClick: () => {},
  },
  {
    text: 'Other Channels',
    onClick: () => {},
  },
]

export const interactiveListItems: ListItem[] = [
  {
    text: 'Sky Active',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'Sky Active' } })
    },
  },
  {
    text: 'QVC',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'QVC' } })
    },
  },
  {
    text: 'PlayJam Games',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'PlayJam Games' } })
    },
  },
  {
    text: 'Teletext Holidays',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'Teletext Holidays' } })
    },
  },
  {
    text: 'Sky Customer Service',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'Sky Customer Service' } })
    },
  },
  {
    text: 'Sky Games',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'Sky Games' } })
    },
  },
  {
    text: 'Ladbrokes Betting & Games',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'Ladbrokes Betting & Games' } })
    },
  },
  {
    text: 'Directgov',
    onClick: () => {
      navigate('/interactive/coming-next', {
        state: {
          serviceName: 'Directgov',
          serviceDescription: 'Public services all in one place',
          nextUrl: '/interactive/services/directgov',
        },
      })
    },
  },
  {
    text: 'Sky Bet, Vegas & Sky Poker',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'Sky Bet, Vegas & Sky Poker' } })
    },
  },
  {
    text: 'GoPlayTV Games',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'GoPlayTV Games' } })
    },
  },
  {
    text: 'YO–YO"',
    onClick: () => {
      navigate('/interactive/service-unavailable', { state: { serviceName: 'YO–YO"' } })
    },
  },
]
