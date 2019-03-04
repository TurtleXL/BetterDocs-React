import React from 'react'
import Layout from '../components/layout-mobile-footer'
//import hero from '../styles/altHero.module.scss'
//import style from '../styles/plugin-page.module.scss'
import { graphql, Link } from 'gatsby'
import Sidebar from '../components/plugins/sidebar'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import kebabCase from "lodash/kebabCase"
import Helmet from 'react-helmet'
import AdSense from 'react-adsense';
//import ad from '../styles/ad.module.scss'
//import alert from '../styles/alerts.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
//import "../styles/plugin-page.css"
import Hero from '../components/plugins/page-hero'
import styled from 'styled-components';
import * as variable from '../styles/variables'
import { darken, rgba } from 'polished'
import { createGlobalStyle } from 'styled-components'
import Modal from '../components/plugins/modal'
import InformationArea from '../components/plugins/page-info-area'
import ContributionArea from '../components/plugins/page-contributors-area'
import DependencyArea from '../components/plugins/page-dependency-area'

const Plugins = (props) => {
  const pluginList = props.data.listPlugins;
  const previewList = props.data.previewsList;
  const dependenciesList = props.data.dependencyList;
  const softList = props.data.softwareList;

  return (
  <Layout>
    {pluginList.edges.map(({ node }, i) => (
    <Helmet
      key={node.id}
      title={ node.frontmatter.title + ' by ' + node.frontmatter.author + ' | BetterDocs' }
      meta={[
        { name: 'description', content: node.frontmatter.description },
        { name: 'keywords', content: 'Discord, BetterDiscord, EnhancedDiscord, TwitchCord, Discord Hacks, Hacks, Mods, Discord Themes, Themes, Discord Plugins, Plugins, Discord Bots, Bots, Discord Servers, Discord Style, Styles' },
      ]}>
      <meta property="og:site_name" content="BetterDocs"/>
      {node.frontmatter.author ?
      <meta property="og:title" content={node.frontmatter.title + ' by ' + node.frontmatter.author}/>
      :
      <meta property="og:title" content={node.frontmatter.title}/>
      }
      <meta property="og:description" content={node.frontmatter.description}/>
      {node.frontmatter.thumbnail ?
      <meta property="og:image" content={node.frontmatter.thumbnail}/>
      :
      null
      }
      <meta property="og:url" content={"https://betterdocs.us/plugins" + node.fields.slug} />
      <html lang="en" />
    </Helmet>
    ))}
    <Container>
    <GlobalStyle />
    {pluginList.edges.map(({ node }, i) => (
      <Wrapper key={node.id}>
        <Hero
        title={node.frontmatter.title}
        author={node.frontmatter.author}
        download={node.frontmatter.download}
        auto={node.frontmatter.auto}
        support={node.frontmatter.support}
        status={node.frontmatter.status}
        tags={node.frontmatter.tags}
        npm_source_url={node.frontmatter.npm_source_url}
        npm_i={node.frontmatter.npm_i}
        github_source_url={node.frontmatter.github_source_url}
        gitlab_source_url={node.frontmatter.gitlab_source_url}
        discord_server={node.frontmatter.discord_server}
        SoftwaresGrouped={softList.group}
        tagsGrouped={pluginList.group}
        />
        {previewList.edges.map(({ node }, i) => (
        <Tabbs key={node.id}>
          <TabListt>
            {node.frontmatter.previews ?
              <Tabb>Overview</Tabb>
            :
              <Tabb>Overview</Tabb>
            }            
            {node.frontmatter.previews &&
              <Tabb>Screenshots</Tabb>
            }
          </TabListt>
          <TabPanell>
            <ContentContainer>
              {node.frontmatter.status ?
              <StatusContainer alt ={node.frontmatter.status}>
                {node.frontmatter.status === "Updated" &&
                  <Status>This plugin is compatible with the latest version of Discord</Status>
                }
                {node.frontmatter.status === "Updated" &&
                  <StatusDescription>This plugin is currently marked as <b>Updated</b> by the community which means this <i>should</i> work. If this is broken for the latest version of please make a report <a target="_blank" rel="noopener noreferrer" href={"https://github.com/MrRobotjs/BetterDocs-React/issues/new?title=" + node.frontmatter.title + " - [Status Report]&labels=report" }>here</a>.</StatusDescription>
                }
                {node.frontmatter.status === "Deprecated" &&
                  <Status>This plugin is not compatible with the latest version of Discord</Status>
                }
                {node.frontmatter.status === "Deprecated" &&
                  <StatusDescription>This plugin is currently marked as <b>Deprecated</b> by the community which means this will break your Discord. If you think this is a mistake please make a report <a target="_blank" rel="noopener noreferrer" href={"https://github.com/MrRobotjs/BetterDocs-React/issues/new?title=" + node.frontmatter.title + " - [Status Report]&labels=report" }>here</a>.</StatusDescription>
                }
                <Modal/>
              </StatusContainer>
              :
              <StatusContainer alt="Unknown">
                <Status>This plugin may or may not be compatible with Discord</Status>
                <StatusDescription>This plugin is currently marked as <b>Unknown</b> which means that this plugin may or may not work. If you would like to report an update for the rest of the community, you can do so <a target="_blank" rel="noopener noreferrer" href={"https://github.com/MrRobotjs/BetterDocs-React/issues/new?title=" + node.frontmatter.title + " - [Status Report]&labels=report" }>here</a>.</StatusDescription>
              </StatusContainer>
              }
              {node.frontmatter.dependency &&
              <DependencyArea
              title={node.frontmatter.title}
              dependenciesList={dependenciesList.group}
              areaHeader="Dependency Requirements"
              />
              }
              <Area>
                <CardHeader>Description</CardHeader>
                <AreaDescriptionCard
                dangerouslySetInnerHTML={{ __html: node.html }}>
                </AreaDescriptionCard>
              </Area>
              <ContributionArea
              author={node.frontmatter.author}
              maintainer={node.frontmatter.current_maintainer}
              title={node.frontmatter.title}
              areaHeader="Contributors"
              />
              <InformationArea
              status={node.frontmatter.status}
              date={node.frontmatter.date}
              SoftwaresGrouped={softList.group}
              github={node.frontmatter.github_source_url}
              gitlab={node.frontmatter.gitlab_source_url}
              npm={node.frontmatter.npm_source_url}
              areaHeader="Information"
              />
              {node.frontmatter.tags &&
              <Area>
                <CardHeader>Tags</CardHeader>
                <TagsContainer>
                    {pluginList.group.map(tag => (
                    <Tag to={`/plugins/tag/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue}>
                    {tag.fieldValue} <span>{tag.totalCount}</span>
                    </Tag>
                    ))}
                </TagsContainer>
              </Area>
              }
              <Options>
                {node.frontmatter.download &&
                  <>
                    {node.frontmatter.auto ?
                    <Download href={'https://minhaskamal.github.io/DownGit/#/home?url=' + node.frontmatter.download} target="blank">
                      Download
                    </Download>
                    :
                    <Download href={node.frontmatter.download} target="blank">
                      Download
                    </Download>
                    }
                  </>
                }
                {node.frontmatter.npm_i &&
                <NpmCopy title="Copy Me!">
                    <span><svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='451.846' height='451.847' viewBox='0 0 451.846 451.847'> <path d='M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z'/></svg> 
                    npm i {node.frontmatter.npm_i}</span>
                </NpmCopy>
                }
                {node.frontmatter.support &&
                <Report href={node.frontmatter.support} target="blank">
                  Doesn't Work?
                </Report>
                }
              </Options>
              <EditBtn key={node.id}>
                  <a href={`https://github.com/MrRobotjs/BetterDocs-React/edit/master/src/plugins/${kebabCase(node.fields.slug)}.md`} target="blank">
                    <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='459' height='459' viewBox='0 0 459 459'>
                        <path d='M0,362.1V459h96.9l280.5-283.05l-96.9-96.9L0,362.1z M451.35,102c10.2-10.2,10.2-25.5,0-35.7L392.7,7.649 c-10.2-10.2-25.5-10.2-35.7,0l-45.9,45.9l96.9,96.9L451.35,102z' id='create' />
                    </svg>
                  </a>
              </EditBtn>
            </ContentContainer>
          </TabPanell>
          {node.frontmatter.previews &&
            <TabPanell>
              <h2>Previews (wip)</h2>
              {previewList.group.map(image => (
                <img src={image.fieldValue} alt={image.fieldValue} key={node.id}/>
              ))}
            </TabPanell>
          }
        </Tabbs>
        ))}
      </Wrapper>
      ))}
      <Sidebar />

    </Container>
    <BackButton
    to="/plugins/"
    cover
    bg="#0a0a0a"
    >
      <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' viewBox='0 0 240.823 240.823' width='512' height='512'>
        <path id='Chevron_Right' d='M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z' fill='#FFF' />
      </svg>
    </BackButton>
    {pluginList.edges.map(({ node }, i) => (
    <TopHeader key={node.id}>
      <div>{node.frontmatter.title}</div>
    </TopHeader>
    ))}
  </Layout>
)
}

export default Plugins;

/*
{node.frontmatter.thumbnail &&
  <a href={node.frontmatter.thumbnail} target="blank" className={style.imgContainer}>
    <img className={style.img} src={node.frontmatter.thumbnail} alt={node.frontmatter.title} />
  </a>
} 


${HtmlContent} {
  display: block;
  word-break: break-word;
  font-size: 0.67rem;
  code {
    font-size: 0.67rem;
  }
  pre {
    line-height: unset;
    padding: 0.95rem;
    padding-top: 0.6rem;
    code {
      font-size: 0.67rem;
      padding: unset;
      line-height: unset;
    }
  }
  a:not([class*="anchor"]) {
    display: inline-block;
    transition: color 250ms, text-shadow 250ms;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    z-index: 0;
    line-height: 1rem;
    &:after {
      position: absolute;
      z-index: -1;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      content: '';
      width: 100%;
      height: 3px;
      background-color: ${variable.SiteColor};
      transition: all 250ms;
    }
    &:hover {
      color: #fff;
      opacity: 1;
      background-color: transparent;
    &::after {
        height: 110%;
        width: 110%;
      }
    }
  }
}
*/

export const pluginsQuery = graphql`
  query pluginsQuery($slug: String!) {
    listPlugins:allMarkdownRemark(
      filter: {
        collection: { 
          eq: "plugins" 
        }
        fields: {
          slug: {
            eq: $slug
          }
        }
      }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      ...pluginFragment
    },
    previewsList:allMarkdownRemark(
      filter: { 
        collection: { 
          eq: "plugins" 
        } 
        fields: {
          slug: {
            eq: $slug
          }
        }
      }
      ) {
      group(field: frontmatter___previews) {
        fieldValue
        totalCount
      }
      ...pluginFragment
    },
    softwareList:allMarkdownRemark(
      filter: {
        collection: { 
          eq: "plugins" 
        }
        fields: {
          slug: {
            eq: $slug
          }
        }
      }) {
      group(field: frontmatter___software) {
        fieldValue
        totalCount
      }
      ...pluginFragment
    },
    dependencyList:allMarkdownRemark(
      filter: {
        collection: { 
          eq: "plugins" 
        }
        fields: {
          slug: {
            eq: $slug
          }
        }
      }) {
      group(field: frontmatter___dependency) {
        fieldValue
        totalCount
      }
      ...pluginFragment
    }
  }
`
/*
<HtmlContent
  dangerouslySetInnerHTML={{ __html: node.html }}>
</HtmlContent>
*/

const Options = styled.div`
`
const Download = styled.a`
`
const Report = styled.a`
`
const StatusContainer = styled.div`
`
const Status = styled.p`
`
const StatusDescription = styled.div`
`
const CardHeader = styled.h1`
`
const Area = styled.div`
`
const Wrapper = styled.section`
`
const DependencyContainer = styled.div`
`
const SoftwaresContainer = styled.div`
`
const Softwaree = styled(Link)`
`
const Header = styled.div`
`
const Dependencies = styled.div`
`
const Button = styled.a`
`
const TableInfo = styled.table`
`
const Row = styled.tr`
`
const Data = styled.td`
`
const AreaCard = styled.div`
`
const SubText = styled.p`
`
const Text = styled.div`
`
const TabListt = styled(TabList)`
`
const Tabb = styled(Tab)`
`
const TabPanell = styled(TabPanel)`
`
const ContentContainer = styled.div`
`
const Content = styled.div`
`
const NpmCopy = styled.div`
`
const TagsContainer = styled.div`
`
const Tag = styled(Link)`
`
const AreaDescriptionCard = styled.div`
`
const EditBtn = styled.div`
`
const Tabbs = styled(Tabs)`
`
const Ad = styled.div`
  order: 3;
  display: block;
`
const TopHeader = styled.div`
  position: fixed;
  top: 0px;
  z-index: 100;
  display: block;
  color: #fff;
  background-color: #0a0a0a;
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  box-shadow: -4px 0px 8px 0px black;
  div {
      width: calc(100% - 4rem);
      display: block;
      margin: 0 auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.7rem;
  }
  @media (min-width: 850px) {
      display: none;
  }
`
const Container = styled.div`
  display: block;
  flex-direction: row;
  background-color: #f1f1f1;
  /*background-color: #fbfafc;*/
  @media (min-width: 850px) {
    display: flex;
  }
  ${Wrapper} {
    order: 1;
    display: flex;
    flex: 3;
    flex-direction: column;
    overflow: hidden;
    padding-left: unset;
    @media (min-width: 850px) {
      padding-left: 14.8rem;
    }
    ${DependencyContainer} {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      order: 2;
      background-color: #eee;
      ${Header} {
        margin-bottom: 17px;
        margin-top: -10px;
        font-size: 0.7rem;
      }
      ${Dependencies} {
        display: flex;
        counter-reset: dependency;  
        ${Button} {
          margin-left: 10px;
          &:first-child {
              margin-left: unset;
          }
          ${Text} {
            display: block;
            background-color: ${variable.SiteColor};
            color: #fff;
            border-radius: 2px;
            padding: 0.3rem 0.6rem;
            font-size: 0.6rem;
            border: 1px solid ${darken(0.1,variable.SiteColor)};
            transition: 250ms all linear;
            position: relative;
            &:hover {
              background: ${darken(0.1,variable.SiteColor)};
            }
            &::before {
              counter-increment: dependency;
              position: absolute;
              top: -8px;
              left: -8px;
              background-color: ${darken(0.1,variable.SiteColor)};
              padding: 4px 7px;
              font-size: 0.5rem;
              border-radius: 50%;
              content: counter(dependency);
              margin-right: 4px;
            }
            &:only-child {
              &::before {
              content: unset;
            }
          }
        }
      }
    }
  }
  ${Tabbs} {
    order: 3;
    ${TabListt} {
      display: flex;
      justify-content: center;
      border-bottom: unset;
      margin-bottom: unset;
      margin-left: unset;
      ${Tabb} {
        transform: all 250ms linear;
        margin: calc(1.45rem / 2) 0;
        padding: .35rem .75rem;
        text-shadow: 0 1px rgba(255,255,255,0.5);
        border-radius: 100px;
        border: 1px solid transparent;
        font-size: .575rem;
        font-weight: bold;
        color: #5f6368;
        list-style: none;
        cursor: pointer;
        &:nth-child(2) {
          margin-left: 10px;
        }
        &:only-child {
          display: none;
        }
        &:hover {
              color: #000;
              background-color: rgba(0,0,0,0.1);
          }
        &:focus {
            outline: unset;
            border: 1px solid ${darken(0.1,variable.SiteColor)};
            box-shadow: unset;
        }
        &:focus::after {
            display: none;
        }
        &[class*="selected"] {
          color: #fff;
          box-shadow: unset;
          text-shadow: unset;
          background-color: ${variable.SiteColor};
        }
      }
    }
    ${TabPanell} {
      /*width: calc(100% - 75px);*/
      margin: 0 auto;
      @media (min-width: 850px) {
        /*width: calc(100% - 300px);*/
      }
      ${ContentContainer} {
        display: flex;
        order: 4;
        flex-direction: column;
        max-height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 3.1rem;
        /*margin: 0 1rem;*/
        margin: 0 auto;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 2.1rem;
        word-break: break-all;
        font-size: 0.6rem;
        @media (min-width: 850px) {
          padding-bottom: unset;
        }
          /*@media (min-width: 850px) {
            width: calc(100% - 300px);
            display: flex;
          }*/
        a:not([class*="anchor"]) {
          display: inline-block;
          transition: color 250ms, text-shadow 250ms;
          color: #000;
          text-decoration: none;
          cursor: pointer;
          position: relative;
          z-index: 0;
          line-height: 1rem;
          &:after {
            position: absolute;
            z-index: -1;
            bottom: -1px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 100%;
            height: 3px;
            background-color: ${variable.SiteColor};
            transition: all 250ms;
          }
          &:hover {
            color: #fff;
            opacity: 1;
            background-color: transparent;
          &::after {
              height: 110%;
              width: 110%;
            }
          }
        }
        ${StatusContainer} {
          display: flex;
          flex-direction: column;
          border-radius: 25px;
          margin-bottom: 1.25rem;
          box-shadow: 2px 2px 40px -12px #999;
          background-color: #fff;
          ${Status} {
            margin: unset;
            font-size: 0.9rem;
            font-weight: bold;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            padding: 0.6rem 0.9rem;
            word-break: keep-all;
          }
          ${StatusDescription} {
            font-size: 0.7rem;
            padding: 0.7rem 0.9rem;
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 25px;
            background-color: #fff;
            margin-top: -1px;
            word-break: keep-all;
            line-height: 0.98rem;
          }
          &[alt="Updated"] {
            display: none;
            ${Status} {
              color: #fff;
              background-color: #00b167;
              background: linear-gradient(90deg,#30c381,#089e46);
            }
            ${StatusDescription} {
              background: rgba(0, 177, 103, 0.08);
              b {
                color: #089e46;
              }
            }
          }
          &[alt="Deprecated"] {
            ${Status} {
              color: #fff;
              background-color: #c33030;
              background: linear-gradient(90deg,#c33030,#9e0808);
            }
            ${StatusDescription} {
              background: rgba(195, 48, 48, 0.08);
              b {
                color: #c33030;
              }
            }
          }
          &[alt="Unknown"] {
            ${Status} {
              color: #fff;
              background-color: #005180;
              background: linear-gradient(90deg,#30a1c3,#005180);
            }
            ${StatusDescription} {
              background: rgba(48, 161, 195, 0.08);
              b {
                color: #005180;
              }
            }
          }
        }
        ${AreaDescriptionCard} {
          display: block;
          word-break: break-word;
          background-color: #fff;
          border-radius: 20px;
          box-shadow: 2px 2px 40px -12px #999;
          padding: 0.8rem 1.1rem;
          border: 1px solid #ececec;
          code {
            font-size: 0.67rem;
            /*line-height: unset;*/
          }
          pre {
            line-height: unset;
            padding: 0.95rem;
            padding-top: 0.6rem;
            code {
              font-size: 0.67rem;
              padding: unset;
              line-height: unset;
            }
          }
          p {
            color: #666;
          }
          p:only-child {
            margin: unset;
          }
          h1 {
            font-size: 1.75rem; /*2.25rem*/
            margin-bottom: 0.7rem; /*1.45*/
            color: #000;
          }
          h2 {
            font-size: 1.22rem; /*1.62671rem*/
            margin-bottom: 0.7rem;
            color: #000;
          }
        }
        ${CardHeader} {
          font-size: 1.55rem;
          margin-bottom: 0.8rem;
        }
        ${Area} {
          margin-bottom: 1.25rem;
          ${CardHeader} {
            font-size: 1.55rem;
            margin-bottom: 0.8rem;
          }
          ${Dependencies} {
            display: flex;
            counter-reset: dependency;  
            ${Button} {
              margin-left: 10px;
                &:first-child {
                  margin-left: unset;
                }
                &::after {
                  height: 0;
                }
                &:hover {
                  &::after {
                    height: 0;
                  }
                }
                ${Text} {
                  display: block;
                  background-color: ${variable.SiteColor};
                  color: #fff;
                  border-radius: 2px;
                  padding: 0.3rem 0.6rem;
                  font-size: 0.6rem;
                  border: 1px solid ${darken(0.1,variable.SiteColor)};
                  transition: 250ms all linear;
                  position: relative;
                  &:hover {
                    background: ${darken(0.1,variable.SiteColor)};
                  }
                  &::before {
                    counter-increment: dependency;
                    position: absolute;
                    top: -8px;
                    left: -8px;
                    background-color: ${darken(0.1,variable.SiteColor)};
                    padding: 4px 7px;
                    font-size: 0.5rem;
                    border-radius: 50%;
                    content: counter(dependency);
                    margin-right: 4px;
                  }
                  &:only-child {
                    &::before {
                    content: unset;
                  }
                }
              }
            }
          }
          ${TagsContainer} {
            display: -webkit-box;
            ${Tag} {
              margin-left: 7px;
              background-color: #fff;
              padding: 0.3rem 0.6rem;
              border-radius: 25px;
              color: #5f6368;
              font-size: 0.95em;
              transition: 300ms ease-in-out all;
              border: 1px solid #eff2f6;
              line-height: initial;
              &:first-child {
                margin-left: unset;
              }
              span {
                  background-color: #eeeeee;
                  color: #5f6368;
                  border-radius: 50%;
                  width: 16px;
                  height: 16px;
                  line-height: 16px;
                  text-align: center;
                  font-size: 0.8em;
                  margin-left: 6px;
                  display: none;
              }
              &:hover {
                  border-bottom-left-radius: 0px;
                  -webkit-box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
                  box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
              }
              &:active, &:focus {
                background-color: ${rgba(variable.SiteColor, 0.1)};
                box-shadow: 0 1px 3px 1px rgba(60,64,67,0.15), 0 1px 2px 0 rgba(60,64,67,0.3);
                outline: unset;
                border-color: transparent;
                border-bottom-left-radius: 0px;
                color: ${variable.SiteColor};
                &::after {
                  height: 0;
                }
              }
              &::after {
                height: 0;
              }
            }
          }
          ${AreaCard} {
            flex-direction: column;
            word-break: break-word;
            background-color: #fff;
            border-radius: 20px;
            box-shadow: 2px 2px 40px -12px #999;
            padding: 0.8rem 1.1rem;
            border: 1px solid #ececec;
              ${SubText} {
                font-weight: bold;
                margin: unset;
                font-size: 0.58rem;
                line-height: 0.9rem;
                color: #969696;
              }
              ${TableInfo} {
                border-collapse: collapse;
                width: 100%;
                margin: unset;
                font-size: 0.7rem;
                ${Row} {
                  border-bottom: 1px solid #cacaca;
                  ${Data} {
                    text-align: left;
                    padding: 10px 8px;
                    margin-bottom: 2px;
                    &:nth-child(2) {
                      text-align: right;
                    }
                    &:nth-child(1) {
                      font-weight: bold;
                    }
                    &[alt="Updated"] {
                      color: #00b167;
                    }
                    &[alt="Deprecated"] {
                      color: #c33030;
                    }
                    &[alt="Unknown"] {
                      color: #005180;
                    }
                    ${SoftwaresContainer} {
                      display: flex;
                      justify-content: flex-end;
                      flex-wrap: wrap;
                      ${Softwaree} {
                        margin-left: 7px;
                        background-color: #fff;
                        padding: 0.38rem 0.56rem;
                        border-radius: 25px;
                        color: #5f6368;
                        font-size: 0.54rem;
                        transition: 300ms ease-in-out all;
                        border: 1px solid #eff2f6;
                        position: relative;
                        line-height: initial;
                        margin-top: 0.1rem;
                          &:hover {
                            background-color: #dddddd;
                            border-bottom-left-radius: 0px;
                            box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
                            &::after {
                              opacity: 1;
                            }
                          }
                          &:active, &:focus {
                            background-color: ${rgba(variable.SiteColor, 0.1)};
                            box-shadow: rgba(60, 64, 67, 0.15) 0px 1px 3px 1px, rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
                            border-bottom-left-radius: 0px;
                            color: ${variable.SiteColor};
                            outline: unset;
                            border-color: transparent;
                        }
                        &::after {
                          height: 0;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ${Options} {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            margin-bottom: 0.8rem;
            @media ${variable.MidPoint} {
              flex-direction: row;
              justify-content: flex-start;
              ${Download} {
                margin-top: 0.5rem;
                margin-right: 0.4rem;
              }
            }
            ${NpmCopy} {
              background-color: #fff;
              border: 1px solid #b3b3b3;
              border-left: 3px solid #b3b3b3;
              padding: 0.6em 0.6rem;
              border-radius: 2px;
              color: #0a0a0a;
              margin-top: 0.5rem;
              transition: 300ms ease-in-out;
              display: flex;
              font-size: 0.67rem;
              flex-direction: column;
              justify-content: center;
              &::after {
                  content: "Copy Me!";
                  display: block;
                  background-color: #0a0a0a;
                  color: #fff;
                  position: absolute;
                  top: 2.1rem;
                  left: 0;
                  z-index: 150;
                  margin: 0 auto;
                  padding: 0.25rem 0.4rem;
                  border-radius: 2px;
                  text-align: center;
                  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.4) !important;
                  transition: .2s linear all;
                  opacity: 0;
                  pointer-events: none;
                  font-size: 0.5rem;
              }
              @media (min-width: 850px) {
                margin-top: 0.5rem;
                margin-right: 0.4rem;
                  &::after {
                      top: 0.28rem;
                      left: -0.8rem;
                  }
              }
              svg {
                  height: 0.5rem;
                  width: 0.4rem;
                  top: 1px;
                  right: 4px;
                  position: relative;
              }
              &:hover {
                  background-color: #f7f7f7;
                  &::after {
                      opacity: 1;
                  }
              }
              &:active, &:focus {
                  background-color: #f0f0f0;
              }
            }
            ${Download} {
              background-color: ${variable.SiteColor};
              border-radius: 25px;
              padding: 0.5rem 1rem;
              font-size: 0.8rem;
              color: #fff;
              box-shadow: 2px 2px 40px -12px #999;
              transition: 300ms ease-in-out all;
              background: linear-gradient(90deg,${variable.SiteColor},${darken(0.3, variable.SiteColor)});
              &::after {
                height: 0;
              }
              &:hover {
                box-shadow: 2px 10px 40px -12px ${darken(0.3, variable.SiteColor)};
                &::after {
                  height: 0;
                }
              }
            }
            ${Report} {
              background-color: #da002f;
              border-radius: 25px;
              padding: 0.5rem 1rem;
              font-size: 0.8rem;
              margin-top: 0.5rem;
              color: #fff;
              box-shadow: 2px 2px 40px -12px #999;
              transition: 300ms ease-in-out all;
              background: linear-gradient(90deg,#da002f, #9e0022);
              position: relative;
              &:after {
                height: 0;
              }
              &:hover {
                box-shadow: 2px 10px 40px -12px #da002f;
                &::after {
                  height: 0;
                }
              }
            }
          }
        }
        ${EditBtn} {
          position: fixed;
          right: 1rem;
          bottom: 2.5rem;
          z-index: 100;
          transition: all linear 250ms;
          @media (min-width: 850px) {
              right: 1.5rem;
              bottom: 1rem;
          }
          a {
            display: block;
            width: 2.5rem;
            height: 2.5rem;
            background-color: ${variable.SiteColor};
            color: #fff;
            text-align: center;
            line-height: 2.5rem;
            border-radius: 50%;
            transition: all linear 250ms;
            box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.5), inset 0px 2px 3px -2px #ffffff;
            font-size: 1.3rem;
            &:hover {
              box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.4), inset 0px 2px 3px -2px #ffffff;
              background-color: ${darken(0.1,variable.SiteColor)} !important;
              &::after {
                display: none !important;
              }
            }
            svg {
              height: 17px;
              width: 17px;
              fill: #fff;
              margin: 0 auto;
              top: 13px;
              position: relative;
            }
            &::after {
              display: none !important;
            }
          }
        }
      }
    }
  }
`
const BackButton = styled(AniLink)`
  position: fixed;
  top: 22px;
  left: 17px;
  z-index: 101;
  display: block;
  @media (min-width: 850px) {
      display: none;
  }
  svg {
      height: 20px;
      width: 20px;
  }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
  ${Container} {
      background-color: #36393f;
      ${Wrapper} {
          ${DependencyContainer} {
              background-color: #2f3136;
              border-bottom: 2px solid #222327;
              ${Header} {
                  color: #fff;
              }
          }
          ${Content} {
              color: #cfcfcf;
              pre {
                  padding: 1rem;
                  line-height: 0.8rem;
                  background-color: rgba(#000, 0.2);
                  code {
                      line-height: 0.8rem;
                      background-color: transparent;
                  }
              }
              code {
                  background-color: rgba(#000, 0.2);
              }
              a {
                  color: #fff !important;
              }
              [class="anchor"] {
                  fill: #fff;
              }
          }
      }
  }
}
`