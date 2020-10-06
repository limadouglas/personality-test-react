import React from 'react'
import styled from 'styled-components'
import { StartBtn } from '../components/utils/Buttons'
import { IntroCard } from '../components/utils/Cards'
import { fonts, colors } from '../components/utils/_var'
import { media } from '../components/utils/_media-queries'
import logo from '../assets/logo.png'

const Wrapper = styled.div`
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  background-image: linear-gradient(to bottom, #01405B 50%, white 50%);
  text-align: center;
  div {
    font-family: ${fonts.$titleFont};
    h1 {
      font-size: 1.7em;
      color:#fff;
    }
    span{
      font-size: 1em;
      color; #fff;
    }
  }
  div{
    img {
      position: absolute;
      bottom: 0;
      max-width: 7.5rem;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }
  }
  h1 {
    position: relative;
    font-family: ${fonts.$titleFont};
    font-size: 1.1em;
    color: ${colors.$colorGold};
    text-align: center;
    padding-top: 2em;
    ${media.tablet`font-size: 1.5em; letter-spacing: 1.5px;`};
    ${media.laptop`font-size: 2em; letter-spacing: 2px;`};
  }
  .list-group {
    padding: 0 2em;
    .list-group-item {
      background: transparent;
      padding: 1em 1.25em;
      font-family: ${fonts.$latoFont};
      border: 0;
      margin-bottom: 0;
      color: ${colors.$colorGold};
      ${media.tablet`font-size: 1.3em`};
      text-align: center;
    }
  }
`

const Intro = ({ title, _onStartClick }) => {
  return (
    <Wrapper className="container">
      <div id="title">
        <h1>Teste comportamental</h1>
        <br/>
        <span>Você está pronta(o) para conhecer seu perfil comportamental predominante?</span>
      </div>
      <div>
        <IntroCard>
          <div className="corner" />
          <div className="corner" />
          <div className="corner" />
          <div className="corner" />
          {/* TODO: WILL CHANGE THIS THING DOWN HERE */}

          <StartBtn onClick={_onStartClick}>
            <span>COMEÇAR O TESTE</span>
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </StartBtn>
          <ul>
            <li id="title-tips">Dicas</li>
            <li>1. Não há resultado bom ou ruim, por isso, seja sincera(o).</li>
            <li>2. Não pense muito, a primeira resposta geralmente será a mais correta.</li>
            <li>3. Responda pensando em quem você é e não em quem gostaria de ser.</li>
          </ul>
        </IntroCard>
      </div>
      <div className="row" />
      <div>
        <img src={logo}/>
      </div>
    </Wrapper>
  )
}

export default Intro
