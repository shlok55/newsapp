import React, { Component } from 'react'
import Newsitem from './Newsitem'


export class News extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "Barron's"
    },
    "author": "Al Root",
    "title": "Cathie Wood Trades Tesla Stock for Nvidia After the Chip Maker's Tough Day",
    "description": "Cathie Wood's ARK Innovation fund bought almost $32 million in Nvidia stock on Thursday.",
    "url": "https://www.barrons.com/articles/nvidia-tesla-stock-cathie-wood-ark-51662104291",
    "urlToImage": "https://images.barrons.com/im-577741/social",
    "publishedAt": "2022-09-02T07:51:49Z",
    "content": "Cathie Wood seems to have used \r\n Nvidiastough day to buy more stock in the graphics chip giant. She sold some of her \r\n Tesla\r\n stake to buy the \r\n Nvidia\r\n shares. Nvidia\r\n (ticker: NVDA) stock dro… [+2107 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "Steve Goldstein",
    "title": "After selling Nvidia last month, Cathie Wood’s ARK snaps up graphic chipmaker’s stock as it hits 52-week low",
    "description": "Cathie Wood's ARK Invest cut its stake in Nvidia ahead of the graphic chipmaker's results last month. Now it's snapped up the stock which has dropped to a 52-week low.",
    "url": "https://www.marketwatch.com/story/after-selling-nvidia-last-month-cathie-woods-ark-snaps-up-graphic-chipmakers-stock-as-it-hits-52-week-low-11662104439",
    "urlToImage": "https://images.mktw.net/im-572842/social",
    "publishedAt": "2022-09-02T07:40:00Z",
    "content": "That was a quick turnaround. After cutting its stake in Nvidia ahead of the graphic chipmakers results last month, Cathie Woods ARK Invest has now bought the stock in three of the companys funds.\r\nTh… [+1004 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tech Times"
    },
    "author": "Inno Flores",
    "title": "Tesla Adds More Job Vacancies for 'Semi Service Program' as Preparation for Electric Truck Deliveries",
    "description": "Similar to last year, the company was also looking for new employees for the service technician position.",
    "url": "https://www.techtimes.com/articles/280009/20220902/tesla-trucks-semi-hiring-deliveries.htm",
    "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/410801/tesla-recalls-over-100-000-model-s-vehicles.jpg",
    "publishedAt": "2022-09-02T07:10:00Z",
    "content": "Tesla adds more job openings for its 'Semi Service Program' for the first batch deliveries of the upcoming Tesla Semi Electric Trucks, as reported by Electrek. \r\n2017 when the large vehicle was intro… [+3128 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Moneycontrol"
    },
    "author": "Sanjeev Ahluwalia",
    "title": "Economic growth | Stepping up its export share could see India out of this downturn",
    "description": "India has done well on the export of goods and services. Last year India, with an export share in GDP of 20.8 percent, was 0.8 percentage points ahead of China. India needs to up its ante to the world average share of exports in GDP of 29.1 percent",
    "url": "https://www.moneycontrol.com/news/opinion/economic-growth-stepping-up-its-export-share-could-see-india-out-of-this-downturn-9120321.html",
    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/10/tradeexportimportchina-770x433.jpeg",
    "publishedAt": "2022-09-02T06:57:04Z",
    "content": "After inflation levels in India cool down, hopefully in the first quarter of the next fiscal year (Reserve Bank of India (RBI) estimate), after the Ukraine crisis becomes dormant, the problem of low … [+9466 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TweakTown"
    },
    "author": "Jak Connor",
    "title": "Neil deGrasse Tyson explains big numbers like Elon Musk's net worth",
    "description": "Famous astrophysicist Neil deGrasse Tyson has explained eloquently just how big numbers can get, using examples such as Jeff Bezos' nearly $100 billion. Continue reading at TweakTown >",
    "url": "https://www.tweaktown.com/news/88268/neil-degrasse-tyson-explains-big-numbers-like-elon-musks-net-worth/index.html",
    "urlToImage": "https://static.tweaktown.com/news/8/8/88268_01_neil-degrasse-tyson-explains-big-numbers-like-elon-musks-net-worth_full.jpg",
    "publishedAt": "2022-09-02T06:52:02Z",
    "content": "Neil deGrasse Tyson has explained on his radio show StarTalk just how big numbers can get, including a physical representation of $100 billion.\r\nPosted to deGrasse Tyson's personal TikTok account, th… [+1986 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Business Standard"
    },
    "author": "AP",
    "title": "Nissan eager to leverage US tax credit on electric vehicles: Report",
    "description": "Nissan will more aggressively push electric vehicles to take advantage of a new US law that gives up to USD 7,500 in tax credits, the Japanese automaker said on Friday.\nPresident Joe Biden signed the landmark climate change and health care bill into law last …",
    "url": "https://www.business-standard.com/article/companies/nissan-eager-to-leverage-us-tax-credit-on-electric-vehicles-report-122090200206_1.html",
    "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/22/full/1616402274-9851.jpg",
    "publishedAt": "2022-09-02T06:50:00Z",
    "content": "Nissan will more aggressively push electric vehicles to take advantage of a new US law that gives up to USD 7,500 in tax credits, the Japanese automaker said on Friday.\r\nPresident Joe Biden signed th… [+2159 chars]"
    },    
    ]
  constructor(){
    super();
    console.log("hello i am a constructorfrom News component")
    this.state={
      articles: this.articles,
      loading: false 
    }
      
    }
  render() {
    return (
      <div className="container my-4"> 
      <h2>Aaj Tak ki Tazza khabar</h2>
     
      <div className="row">
         {this.state.articles.map((element)=>{
          return <div className="col-md-4"  key={element.url} >
        <Newsitem title= {element.title} description={element.description} imageUrl={element.urlToImage} newsUrl="TODO"/>
             </div>
         })}
             
        </div>
       
        </div>
        
        

     
      )
  }
}

export default News