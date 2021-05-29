import { navigate } from 'gatsby'
import querystring from 'query-string'
import { Genres } from '../../../constants/Genres'
import { ListItem } from '../Menu'

function navigateToEpg(startingNumber: number, genre?: Genres) {
  const query = {
    start: startingNumber,
    genre,
  }

  navigate(`/epg/channel-list?${querystring.stringify(query, { skipNull: true })}`)
}

export const tvGuideListItems: ListItem[] = [
  {
    text: 'All Channels',
    onClick: () => {
      navigateToEpg(101)
    },
  },
  {
    text: 'Entertainment',
    onClick: () => {
      navigateToEpg(101, Genres.Entertainment)
    },
  },
  {
    text: 'Lifestyle & Culture',
    onClick: () => {
      navigateToEpg(101, Genres.LifestyleAndCulture)
    },
  },
  {
    text: 'Movies',
    onClick: () => {
      navigateToEpg(101, Genres.Movies)
    },
  },
  {
    text: 'Sports',
    onClick: () => {
      navigateToEpg(101, Genres.Sports)
    },
  },
  {
    text: 'News',
    onClick: () => {
      navigateToEpg(101, Genres.News)
    },
  },
  {
    text: 'Documentaries',
    onClick: () => {
      navigateToEpg(101, Genres.Documentaries)
    },
  },
  {
    text: 'Kids',
    onClick: () => {
      navigateToEpg(101, Genres.Kids)
    },
  },
  {
    text: 'Music',
    onClick: () => {
      navigateToEpg(101, Genres.Music)
    },
  },
  {
    text: 'Radio',
    onClick: () => {
      navigateToEpg(101, Genres.Radio)
    },
  },
  {
    text: 'Shopping',
    onClick: () => {
      navigateToEpg(101, Genres.Shopping)
    },
  },
  {
    text: 'Religion',
    onClick: () => {
      navigateToEpg(101, Genres.Religion)
    },
  },
  {
    text: 'International',
    onClick: () => {
      navigateToEpg(101, Genres.International)
    },
  },
  {
    text: 'Gaming & Dating',
    onClick: () => {
      navigateToEpg(101, Genres.GamingAndDating)
    },
  },
  {
    text: 'Specialist',
    onClick: () => {
      navigateToEpg(101, Genres.Specialist)
    },
  },
  {
    text: 'Adult',
    onClick: () => {
      navigateToEpg(101, Genres.Adult)
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
    onClick: () => {},
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
