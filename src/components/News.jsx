import React from 'react'
import {Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const {Text, Title} = Typography;



const News = ({simplified}) => {
  const { data: cryptoNews, error, isLoading } = useGetCryptoNewsQuery({count : simplified ? 15 : 20})

  if (isLoading) return "Loading...";
  if (error) return `Error: ${error}`;
  if (!cryptoNews || !cryptoNews.data) return 'No news available.';
  const articlesToShow = cryptoNews.data.slice(0, 6) || [];
  const demoImage = "https://www.nasdaq.com/sites/acquia.prod/files/2022/11/09/coindesksquare.jpg"
  return (
    <Row gutter={[24 , 24]}>

  
        {articlesToShow.map((news, i)=> (
          <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className='news-card'>
                  <a href={news.url} target="_blank" rel="noreferrer">
                  <div className='news-image-container'>
                  <Title className='news-title' level={4}>{""}{news.title}</Title>
                  <img src={news?.thumbnail} style={{height:"50px"}}></img>
                  </div>
                  <p>
                    {news?.description >  100 ? `${news.description.substring(0,100)}...` :
                    news.description}
                  </p>
                  <div className='provider-container'>
                      <div>
                        <Avatar src={demoImage}/>
                        <Text>{moment(news.createdAt).startOf('ss').fromNow()}</Text>
                      </div>
                  </div>
                  </a>

              </Card>

          </Col>

        ))}

    </Row>
  )
}

export default News