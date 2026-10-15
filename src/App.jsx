import { useEffect, useRef, useState } from 'react'
import airtelLogo from './icons/airtel.svg?url'
import amazonPrimeLogo from './icons/amazon-prime.svg?url'
import amazonLogo from './icons/amazon.svg?url'
import appleMusicLogo from './icons/apple-music.svg?url'
import appleTvLogo from './icons/apple-tv.svg?url'
import appleLogo from './icons/apple.svg?url'
import audiobookshelfLogo from './icons/audiobookshelf.svg?url'
import axisBankLogo from './icons/axis-bank.svg?url'
import braveLogo from './icons/brave.svg?url'
import chromeLogo from './icons/chrome.svg?url'
import claudeLogo from './icons/claude.svg?url'
import discordLogo from './icons/discord.svg?url'
import facebookLogo from './icons/facebook.svg?url'
import firefoxLogo from './icons/firefox.svg?url'
import githubLogo from './icons/github.svg?url'
import gmailLogo from './icons/gmail.svg?url'
import googleCalendarLogo from './icons/google-calendar-2026.svg?url'
import googleDriveLogo from './icons/google-drive-2026.svg?url'
import googleMapsLogo from './icons/google-maps.svg?url'
import googlePhotosLogo from './icons/google-photos.svg?url'
import googleLogo from './icons/google.svg?url'
import grokLogo from './icons/grok.svg?url'
import hdfcBankLogo from './icons/hdfc-bank.svg?url'
import iciciBankLogo from './icons/icici-bank.svg?url'
import instagramLogo from './icons/instagram.svg?url'
import meetupLogo from './icons/meetup.svg?url'
import messengerLogo from './icons/messenger.svg?url'
import metaLogo from './icons/meta.svg?url'
import microsoftLogo from './icons/microsoft.svg?url'
import netflixLogo from './icons/netflix.svg?url'
import chatgptLogo from './icons/openai-chatgpt.svg?url'
import paytmLogo from './icons/paytm.svg?url'
import phonepeLogo from './icons/phonepe.svg?url'
import pinterestLogo from './icons/pinterest.svg?url'
import redditLogo from './icons/reddit.svg?url'
import spotifyLogo from './icons/spotify.svg?url'
import substackLogo from './icons/substack.svg?url'
import telegramLogo from './icons/telegram.svg?url'
import twitterBadgeLogo from './icons/twitter-badge.svg?url'
import uberLogo from './icons/uber.svg?url'
import whatsappLogo from './icons/whatsapp.svg?url'
import xLogo from './icons/x.svg?url'
import youtubeMusicLogo from './icons/youtube-music.svg?url'
import youtubeLogo from './icons/youtube.svg?url'
import './App.css'

function App() {
  const [iconData] = useState([
    {
      id: 1,
      name: 'Airtel',
      img: airtelLogo,
      link: 'https://www.airtel.in/',
      labels: ['telecommunications'],
    },
    {
      id: 2,
      name: 'Amazon Prime Video',
      img: amazonPrimeLogo,
      link: 'https://www.primevideo.com/',
      labels: ['entertainment', 'streaming'],
    },
    {
      id: 3,
      name: 'Amazon',
      img: amazonLogo,
      link: 'https://www.amazon.com/',
      labels: ['shopping', 'technology'],
    },
    {
      id: 4,
      name: 'Apple Music',
      img: appleMusicLogo,
      link: 'https://music.apple.com/',
      labels: ['entertainment', 'music', 'streaming'],
    },
    {
      id: 5,
      name: 'Apple TV',
      img: appleTvLogo,
      link: 'https://tv.apple.com/',
      labels: ['entertainment', 'streaming'],
    },
    {
      id: 6,
      name: 'Apple',
      img: appleLogo,
      link: 'https://www.apple.com/',
      labels: ['technology'],
    },
    {
      id: 7,
      name: 'Audiobookshelf',
      img: audiobookshelfLogo,
      link: 'https://www.audiobookshelf.org/',
      labels: ['entertainment', 'books', 'media'],
    },
    {
      id: 8,
      name: 'Axis Bank',
      img: axisBankLogo,
      link: 'https://www.axisbank.com/',
      labels: ['finance', 'banking'],
    },
    {
      id: 9,
      name: 'Brave',
      img: braveLogo,
      link: 'https://brave.com/',
      labels: ['technology', 'browser'],
    },
    {
      id: 10,
      name: 'Chrome',
      img: chromeLogo,
      link: 'https://www.google.com/chrome/',
      labels: ['technology', 'browser'],
    },
    {
      id: 11,
      name: 'Claude',
      img: claudeLogo,
      link: 'https://claude.ai/',
      labels: ['technology', 'artificial intelligence'],
    },
    {
      id: 12,
      name: 'Discord',
      img: discordLogo,
      link: 'https://discord.com/',
      labels: ['social', 'communication', 'messaging'],
    },
    {
      id: 13,
      name: 'Facebook',
      img: facebookLogo,
      link: 'https://www.facebook.com/',
      labels: ['social', 'communication'],
    },
    {
      id: 14,
      name: 'Firefox',
      img: firefoxLogo,
      link: 'https://www.mozilla.org/firefox/',
      labels: ['technology', 'browser'],
    },
    {
      id: 15,
      name: 'GitHub',
      img: githubLogo,
      link: 'https://github.com/',
      labels: ['development', 'technology', 'code'],
    },
    {
      id: 16,
      name: 'Gmail',
      img: gmailLogo,
      link: 'https://mail.google.com/',
      labels: ['communication', 'email', 'productivity','google'],
    },
    {
      id: 17,
      name: 'Google Calendar',
      img: googleCalendarLogo,
      link: 'https://calendar.google.com/',
      labels: ['productivity', 'organization','google'],
    },
    {
      id: 18,
      name: 'Google Drive',
      img: googleDriveLogo,
      link: 'https://drive.google.com/',
      labels: ['productivity', 'storage','google'],
    },
    {
      id: 19,
      name: 'Google Maps',
      img: googleMapsLogo,
      link: 'https://maps.google.com/',
      labels: ['travel', 'navigation','google'],
    },
    {
      id: 20,
      name: 'Google Photos',
      img: googlePhotosLogo,
      link: 'https://photos.google.com/',
      labels: ['photography', 'storage','google'],
    },
    {
      id: 21,
      name: 'Google',
      img: googleLogo,
      link: 'https://www.google.com/',
      labels: ['technology', 'search','google'],
    },
    {
      id: 22,
      name: 'Grok',
      img: grokLogo,
      link: 'https://grok.com/',
      labels: ['technology', 'artificial intelligence'],
    },
    {
      id: 23,
      name: 'HDFC Bank',
      img: hdfcBankLogo,
      link: 'https://www.hdfcbank.com/',
      labels: ['finance', 'banking'],
    },
    {
      id: 24,
      name: 'ICICI Bank',
      img: iciciBankLogo,
      link: 'https://www.icicibank.com/',
      labels: ['finance', 'banking'],
    },
    {
      id: 25,
      name: 'Instagram',
      img: instagramLogo,
      link: 'https://www.instagram.com/',
      labels: ['social', 'photography'],
    },
    {
      id: 26,
      name: 'Meetup',
      img: meetupLogo,
      link: 'https://www.meetup.com/',
      labels: ['social', 'events'],
    },
    {
      id: 27,
      name: 'Messenger',
      img: messengerLogo,
      link: 'https://www.messenger.com/',
      labels: ['social', 'communication', 'messaging'],
    },
    {
      id: 28,
      name: 'Meta',
      img: metaLogo,
      link: 'https://about.meta.com/',
      labels: ['technology', 'social'],
    },
    {
      id: 29,
      name: 'Microsoft',
      img: microsoftLogo,
      link: 'https://www.microsoft.com/',
      labels: ['technology', 'productivity'],
    },
    {
      id: 30,
      name: 'Netflix',
      img: netflixLogo,
      link: 'https://www.netflix.com/',
      labels: ['entertainment', 'streaming'],
    },
    {
      id: 31,
      name: 'ChatGPT',
      img: chatgptLogo,
      link: 'https://chatgpt.com/',
      labels: ['technology', 'artificial intelligence'],
    },
    {
      id: 32,
      name: 'Paytm',
      img: paytmLogo,
      link: 'https://paytm.com/',
      labels: ['finance', 'payments'],
    },
    {
      id: 33,
      name: 'PhonePe',
      img: phonepeLogo,
      link: 'https://www.phonepe.com/',
      labels: ['finance', 'payments'],
    },
    {
      id: 34,
      name: 'Pinterest',
      img: pinterestLogo,
      link: 'https://www.pinterest.com/',
      labels: ['social', 'design', 'inspiration'],
    },
    {
      id: 35,
      name: 'Reddit',
      img: redditLogo,
      link: 'https://www.reddit.com/',
      labels: ['social', 'community'],
    },
    {
      id: 36,
      name: 'Spotify',
      img: spotifyLogo,
      link: 'https://www.spotify.com/',
      labels: ['entertainment', 'music', 'streaming'],
    },
    {
      id: 37,
      name: 'Substack',
      img: substackLogo,
      link: 'https://substack.com/',
      labels: ['news', 'writing', 'publishing'],
    },
    {
      id: 38,
      name: 'Telegram',
      img: telegramLogo,
      link: 'https://telegram.org/',
      labels: ['communication', 'messaging'],
    },
    {
      id: 39,
      name: 'Twitter',
      img: twitterBadgeLogo,
      link: 'https://twitter.com/',
      labels: ['social', 'news'],
    },
    {
      id: 40,
      name: 'Uber',
      img: uberLogo,
      link: 'https://www.uber.com/',
      labels: ['transportation', 'travel'],
    },
    {
      id: 41,
      name: 'WhatsApp',
      img: whatsappLogo,
      link: 'https://www.whatsapp.com/',
      labels: ['communication', 'messaging'],
    },
    {
      id: 42,
      name: 'X',
      img: xLogo,
      link: 'https://x.com/',
      labels: ['social', 'news'],
    },
    {
      id: 43,
      name: 'YouTube Music',
      img: youtubeMusicLogo,
      link: 'https://music.youtube.com/',
      labels: ['entertainment', 'music', 'streaming'],
    },
    {
      id: 44,
      name: 'YouTube',
      img: youtubeLogo,
      link: 'https://www.youtube.com/',
      labels: ['entertainment', 'video', 'streaming'],
    },
  ])



  const groupedIconData = iconData.reduce((groups, icon) => {
    icon.labels.forEach((label) => {
      if (!groups[label]) {
        groups[label] = []
      }

      groups[label].push(icon)
    })

    return groups
  }, {})
  const [selectedGroup, setSelectedGroup] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)
  const searchInputRef = useRef(null)
  const [viewportMetrics, setViewportMetrics] = useState({
    bottomInset: 0,
    height: window.visualViewport?.height ?? window.innerHeight,
    offsetTop: window.visualViewport?.offsetTop ?? 0,
  })
  const firstResultRef = useRef(null)
  const filterMenuRef = useRef(null)
  const normalizedSearch = searchQuery.trim().toLowerCase()
  const visibleGroups = Object.entries(groupedIconData)
    .filter(
      ([label]) =>
        selectedGroup === 'all' ||
        label === selectedGroup,
    )
    .map(([label, icons]) => [
      label,
      icons.filter(
        (icon) =>
          !normalizedSearch ||
          icon.name.toLowerCase().includes(normalizedSearch) ||
          icon.labels.some((iconLabel) =>
            iconLabel.toLowerCase().includes(normalizedSearch),
          ),
      ),
    ])
    .filter(([, icons]) => icons.length > 0)

  const selectGroup = (label) => {
    setSelectedGroup(label)
    setSearchQuery('')
    setSearchFocused(false)
    searchInputRef.current?.blur()
  }

  useEffect(() => {
    const visualViewport = window.visualViewport
    const updateViewportMetrics = () => {
      const height = visualViewport?.height ?? window.innerHeight
      const offsetTop = visualViewport?.offsetTop ?? 0
      const bottomInset = visualViewport
        ? Math.max(0, window.innerHeight - height - offsetTop)
        : 0

      setViewportMetrics((current) =>
        current.bottomInset === bottomInset &&
        current.height === height &&
        current.offsetTop === offsetTop
          ? current
          : { bottomInset, height, offsetTop },
      )
    }

    visualViewport?.addEventListener('resize', updateViewportMetrics)
    visualViewport?.addEventListener('scroll', updateViewportMetrics)
    window.addEventListener('resize', updateViewportMetrics)
    updateViewportMetrics()

    return () => {
      visualViewport?.removeEventListener('resize', updateViewportMetrics)
      visualViewport?.removeEventListener('scroll', updateViewportMetrics)
      window.removeEventListener('resize', updateViewportMetrics)
    }
  }, [])

  useEffect(() => {
    if (!searchFocused || !normalizedSearch || !firstResultRef.current) {
      return
    }

    const visualViewport = window.visualViewport
    const visibleHeight = visualViewport?.height ?? window.innerHeight
    const offsetTop = visualViewport?.offsetTop ?? 0
    const menuHeight = filterMenuRef.current?.getBoundingClientRect().height ?? 0
    const result = firstResultRef.current.getBoundingClientRect()
    const availableHeight = Math.max(0, visibleHeight - menuHeight)
    const targetTop =
      window.scrollY +
      result.top -
      offsetTop -
      Math.max(16, (availableHeight - result.height) / 2)

    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' })
  }, [
    normalizedSearch,
    searchFocused,
    selectedGroup,
    viewportMetrics.height,
    viewportMetrics.offsetTop,
  ])

  return (
    <main className="app-shell">
      {/* <header className="app-header">
        <div>
          <p className="eyebrow">YOUR COLLECTION</p>
          <h1>App library</h1>
          <p className="app-description">
            Your favorite apps, all in one place.
          </p>
        </div>
        <span className="app-count">{iconData.length} apps</span>
      </header> */}
      {visibleGroups.length > 0 ? (
        visibleGroups.map(([label, icons], groupIndex) => {
        const groupId = `group-${label.replace(/\s+/g, '-')}`

        return (
          <details
            className="icon-group"
            key={label}
            open
          >
            <summary className="icon-group-summary">
              <h2 className="icon-group-title" id={groupId}>
                {label}
              </h2>
              <span className="icon-group-count">{icons.length}</span>
            </summary>
            <div className="icon-grid">
              {icons.map((icon, iconIndex) => (
                <div
                  className="icon-card"
                  key={icon.id}
                  ref={
                    groupIndex === 0 && iconIndex === 0
                      ? firstResultRef
                      : undefined
                  }
                >
                  {icon.img && (
                    <span
                      className={
                        icon.name === 'Apple' ||
                        icon.name === 'Grok' ||
                        icon.name === 'Uber'
                          ? 'icon-image icon-image-contrast'
                          : 'icon-image'
                      }
                      aria-hidden="true"
                    >
                      <img src={icon.img} alt="" />
                    </span>
                  )}
                  <span className="icon-name">{icon.name}</span>
                </div>
              ))}
            </div>
          </details>
        )
        })
      ) : (
        <p className="empty-results">No apps match your search.</p>
      )}
      <nav
        className="filter-menu"
        aria-label="Filter apps"
        ref={filterMenuRef}
        style={{ bottom: `${viewportMetrics.bottomInset}px` }}
      >
        <div className="filter-menu-inner">
          <label className="search-field">
            <span className="visually-hidden">Search apps by name or label</span>
            <input
              ref={searchInputRef}
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onFocus={() => {
                setSelectedGroup('all')
                setSearchFocused(true)
              }}
              onBlur={() => setSearchFocused(false)}
              placeholder="Search apps or labels"
            />
          </label>
          <div className="group-filters" role="group" aria-label="Filter by group">
            <button
              className={`group-filter${selectedGroup === 'all' ? ' is-active' : ''}`}
              type="button"
              aria-pressed={selectedGroup === 'all'}
              onClick={() => selectGroup('all')}
            >
              All <span className="group-filter-count">{iconData.length}</span>
            </button>
            {Object.keys(groupedIconData).map((label) => (
              <button
                className={`group-filter${selectedGroup === label ? ' is-active' : ''}`}
                type="button"
                key={label}
                aria-pressed={selectedGroup === label}
                onClick={() => selectGroup(label)}
              >
                {label}{' '}
                <span className="group-filter-count">
                  {groupedIconData[label].length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </main>
  )
}

export default App
