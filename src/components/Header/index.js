import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import linkFamily from '../../images/link-family.jpg'
import linkAdventure from '../../images/link-adventure.jpg'

const HeaderWrapper = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 3fr 250px;
`

const FirstPost = styled.div``

const NaviContainer = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 125px;

  a {
    color: #fff;
    text-decoration: none;
    display: grid;
    align-content: center;
    justify-items: center;
    background-color: #416e67;
    position: relative;
    overflow: hidden;

    :before,
    :after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 500ms;
    }
    :after {
      z-index: 0;
    }
    :before {
      background-color: rgba(65, 110, 103, 0.7);
      z-index: 1;
    }
    :hover {
      :before {
        background-color: rgba(65, 110, 103, 0.4);
      }
      :after {
        transform: scale(1.2);
      }
    }

    span {
      z-index: 2;
    }
  }

  a:last-of-type {
    grid-column: span 2;
  }

  a:hover {
    background-size: 120%;
  }

  .link-family:after {
    background-image: url(${linkFamily});
  }

  .link-adventure:after {
    background-image: url(${linkAdventure});
  }
`

export default class Header extends Component {
  render() {
    const { data, location } = this.props
    return (
      <HeaderWrapper>
        <FirstPost>
          <h1>{data.frontmatter.title}</h1>
        </FirstPost>
        <NaviContainer>
          <Link to="\" className="link-family">
            <span>Family</span>
          </Link>
          <Link to="\">
            <span>Home</span>
          </Link>
          <Link to="\">
            <span>Quotes</span>
          </Link>
          <Link to="\" className="link-adventure">
            <span>Adventure</span>
          </Link>
          <Link to="\">
            <span>Self Love</span>
          </Link>
          <Link to="\">
            <span>Self Care</span>
          </Link>
          <Link to="\">
            <span>Lettering</span>
          </Link>
        </NaviContainer>
      </HeaderWrapper>
    )
  }
}
