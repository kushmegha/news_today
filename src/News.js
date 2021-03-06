import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: { id: "abc-news-au", name: "ABC News (AU)" },
      author: "ABC News",
      title:
        "South African cricketer Quinton de Kock apologises for refusing to take a knee at men's T20 World Cup",
      description:
        'Quinton de Kock apologises for rejecting a Cricket South Africa directive that players must "take a knee" in support of the Black Lives Matter movement.',
      url: "http://www.abc.net.au/news/2021-10-28/south-africa-quniton-de-kock-apologises-for-not-taking-knee/100578296",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/e79786d02e41aa8c792b4e185f648c26?impolicy=wcms_crop_resize&cropH=765&cropW=1360&xPos=766&yPos=100&width=862&height=485",
      publishedAt: "2021-10-28T07:35:17Z",
      content:
        "Quinton de Kock has apologised for pulling out of South Africa's men's Twenty20 World Cup match against West Indies after rejecting a Cricket South Africa directive that players must \"take a knee\" in… [+836 chars]",
    },
    {
      source: { id: "news24", name: "News24" },
      author: "Khanyiso Tshwaku",
      title:
        "Match-fixing confessions could have been 'red herrings' at transformation hearings",
      description:
        "Cricket South Africa's Cricket for Social Justice and Nation-building transformation ombudsman Dumisa Ntsebeza admitted that the match-fixing testimonies have become a red herring for the commission.",
      url: "https://www.news24.com/sport/Cricket/sjn-ombud-ntsebeza-admits-match-fixing-confessions-could-have-been-red-herrings-20211028",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/969/eca3234c633e43c4a0b3fd44fce0850e.png",
      publishedAt: "2021-10-28T06:52:18+00:00",
      content:
        "<ul><li>Cricket for Social Justice and Nation-building transformation ombudsman Dumisa Ntsebeza said the match-fixing part of the hearings may have been a red herring.</li><li>Ntsebeza said this duri… [+3484 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News_Today - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element) => {
          return (
              <div className="col mb-4" key={element.url}>
                <Newsitem
                  title={element.title.slice(0,80)}
                  description={element.description.slice(0,40)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
          );
        })}
      </div>
      </div>
    );
  }
}

export default News;
