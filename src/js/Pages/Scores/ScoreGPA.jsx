
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ScoreGPA = (props) => (
  <div className='page-wrapper score'>
    <div className='container'>
      <Row>
        <Col sm={8} smOffset={2}>
          <div>
            <h1>
              <i className='glyphicon glyphicon-ok-sign' />
              <span className='bold'>GPA 計算機</span>
            </h1>
          </div>
          <p className='lead'>
            我們提供 Overall GPA、Last 60 Credits 的成績試算，想出國或撇一眼自己 GPA 的同學們不用再跑到中正堂列印或花時間手算，
            <span className='bold underlined'>試算前您必須確認將最新的成績匯入，可以到 <Link to='/scores/import'>這裡</Link>匯入。</span>
          </p>
          <Row>
            <Col sm={6}>
              <div className='jumbotron bg-white text-center'>
                <h3 className='bold'>Overall 4.0</h3>
                <h2 className='lighter'>3.65</h2>
              </div>
              <div className='jumbotron bg-white text-center'>
                <h3 className='bold'>Last 60 Credits 4.0</h3>
                <h2 className='lighter'>3.77 <h3 className='lighter inline'>(61)</h3></h2>
              </div>
            </Col>
            <Col sm={6}>
              <div className='jumbotron bg-white text-center'>
                <h3 className='bold'>Overall 4.3</h3>
                <h2 className='lighter'>3.59</h2>
              </div>
              <div className='jumbotron bg-white text-center'>
                <h3 className='bold'>Last 60 Credits 4.3</h3>
                <h2 className='lighter'>3.73 <h3 className='lighter inline'>(61)</h3></h2>
              </div>
              <div className='submit-btn pull-right'>
                <Button bsStyle='warning'>重新載入</Button>
              </div>
            </Col>
          </Row>
          <div>
            <p>註：此計算參考 <a href='/assets/nctu_gpa-59091cd39377d7c15ce82acb54852e67.jpg' target='blank'>等級制與百分制及GP對照表-交通大學</a> 與 <a href='http://intra.tpml.edu.tw/study/upload/downloads/GPA.htm' target='_blank'> 美國大學四點制的算法</a>，Last 60 Credits 採由後往前計算至大於等於 60 學分為止，也就是可能超過 60 學分 (呈現於括號內)，實際成績以學校成績單為準。</p>
          </div>
        </Col>
      </Row>
    </div>
  </div>
)

export default ScoreGPA
