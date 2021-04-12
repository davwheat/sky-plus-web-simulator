import { navigate } from 'gatsby'
import { ListItem } from '../Menu'

export const tvGuideListItems: ListItem[] = [
  {
    text: 'All Channels',
    onClick: () => {},
  },
  {
    text: 'Entertainment',
    onClick: () => {},
  },
  {
    text: 'Lifestyle & Culture',
    onClick: () => {
      alert('l&c')
    },
  },
  {
    text: 'Movies',
    onClick: () => {},
  },
  {
    text: 'Sports',
    onClick: () => {},
  },
  {
    text: 'News',
    onClick: () => {},
  },
  {
    text: 'Documentaries',
    onClick: () => {},
  },
  {
    text: 'Kids',
    onClick: () => {},
  },
  {
    text: 'Music',
    onClick: () => {},
  },
  {
    text: 'Radio',
    onClick: () => {},
  },
  {
    text: 'Shopping',
    onClick: () => {},
  },
  {
    text: 'Religion',
    onClick: () => {},
  },
  {
    text: 'International',
    onClick: () => {},
  },
  {
    text: 'Gaming & Dating',
    onClick: () => {},
  },
  {
    text: 'Specialist',
    onClick: () => {},
  },
  {
    text: 'Adult',
    onClick: () => {},
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
    onClick: () => {},
  },
  {
    text: 'Telephone numbers',
    onClick: () => {},
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
      navigate('/interactive/directgov')
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
