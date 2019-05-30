import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// 
import { DetailWrapper, Header, DImg, DTop, Ddet, DName, DButton, DArticle, Content } from './style.js'
import { actionCreators } from './store'
import { reductionPageAction } from '../home/store/actionCreators';
import './style.css';
class Detail extends PureComponent {
    constructor(props) {
        super(props);
        //当组建的state或者props发生改变的时候，render函数就会重新执行
        this.state = {
            inputValue:'',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }
    
    render() {
        
        return (
            <DetailWrapper>
                {/* <Content
                    dangerouslySetInnerHTML={{ __html: this.props.content }}
                /> */}
                {/* <Header>{this.props.title}面试官的陷阱:"你的期望薪资是多少？"</Header> */}
                <Header>{this.props.title}"</Header>
                <DTop>
                    <DImg className="tx" />
                    <DName>{this.props.DName}<br />
                        {/* <DName>阿德邦HRSaaS<br /> */}
                        <Ddet dangerouslySetInnerHTML={{ __html: this.props.Ddet }}>
                            {/* <Ddet> */}
                            {/* {this.props.Ddet} */}
                            {/* 2019.03.21&nbsp;&nbsp;字数&nbsp;14330&nbsp;&nbsp;阅读&nbsp;7853&nbsp;&nbsp;评论&nbsp;863&nbsp;&nbsp;喜欢&nbsp;87682 */}
                        </Ddet>
                    </DName>
                    <DButton>+ 关注</DButton>
                </DTop>
                <DArticle dangerouslySetInnerHTML={{ __html: this.props.DArticle }}>
                    {/* {this.props.DArticle} */}
                    {/* 亲爱的小伙伴们，想必各位或多或少都经历过谈薪的阶段，当HR问：你期望的薪资是多少？说低了总觉得委屈自己，说高了又怕offer不保，好不容易在前面几轮面试积攒的自信，在这个问题上就变成“emm差不多就行吧”然后面试一结束就开始无限后悔……<br />  
                    怎么巧妙回答薪资问题？  <br />
                    怎么保证自己的利益最大化？  <br />
                    怎么把“白菜价”开成“翡翠价”？  <br />
                    来听听我今天的讲解吧 <br />
                    <img src="../../../public/images/a1.jpg" className="img1" /> <br />
                    HR为什么问？  <br />
                    要想回答好这个问题，就得先弄清企业提问的目的：  <br />
                    一、了解你的期望薪资是否在公司的薪酬体系范围内  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;如果是体量大的企业确实会有一套薪酬体系，每一种岗位都有薪资范围，但小伙伴们会想，为什么企业不直接确定薪资，问我接不接受就可以了。这里涉及到人力资源中的“员工薪酬满意度”问题。  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;假设一下，某企业的薪资范围是7-8k，你说出的期望是8.5k，8k你也能接受，但并不满意，这样肯定会影响你工作中的情绪，所以企业要么就不用你，要用就满足你的8.5K需求。<br />
                    <img src="../../../public/images/a2.jpg" className="img1" /> <br />
                    二、摄想了解你在原有的薪资基础上想提升多少  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;在问你期望薪资之前HR一定会问你目前薪资，现在这个目前薪资你还得如实回答，因为现在稍微重要的岗位在offer之后，入职之前都要做背调的，HR问你期望薪资也是想了解在你目前的薪资基础上，你想提升多少，一般来说提升30%左右算比较正常的，如果你不想提升，企业也会认为有问题，不差钱就有其它目的，其它目的可能对企业来说比你想赚钱更不好满足。<br />  
                    三、想了解你对自我价值的判定  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;你有明确的薪资要求，说明你对自己的价值有明确的判定，如果你的期望比目前薪资高出很多，比如翻倍， 那么HR也希望听你说一下原因，看看你的逻辑是否清晰，你的能力能给企业带来什么价值，是否值得企业开出这份薪资。<br />
                    <img src="../../../public/images/a3.png" className="img1" /> <br />
                    求职者怎么回答<br />
                    一、了解自己的市场价值  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;每项工作都有一般市场价值，在回答薪资问题之前，先查找薪资数据，了解求职岗位以及自身经验、技能水平可以拿到的薪资范围。  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;这几个网站可以为我们提供工资信息：  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;■ www.salary.com    ■ www.glassdoor.com/Salaries<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;■ Indeed/salaries      ■ LinkedIn/salary  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;■ Payscale.com  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;另外，还有公众号邦圈职的邦你查功能，可以为我们提供该岗位的就业数据以及薪资等。同时，将自己的期望待遇列举出来，包括基本工作，最重视的好处，或是某些特别的兴趣。<br />
                    二、事先做功课，了解目标公司  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;在美国，只有不到15％的公司会在职位发布信息中注明薪资范围，在申请岗位前，可以先做市场调查，从官网或者前雇员的评价，来了解自己的求职岗位在目标公司中的地位，以及培训机会、成长空间等，再是福利待遇。  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;除了薪水，我们还可以看公司是否提供以下的福利，包括：<br />
                    <img src="../../../public/images/a5.png" className="img1" /> <br />
                    值得一提的是，工作的位置很重要！同一个公司及岗位，工资可能会根据工作地点大幅度变化，需要关注地域因素。  <br />
                    三、自我定位和公司定位  <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;你需要了解到，公司对你或者说这个岗位的人的定位是什么？有没有什么计划，未来3年有什么目标，需要达成什么结果，这个岗位的人向谁汇报工作等这些问题。这些问题涉及到你个人在这家公司的成长问题，有可能也将决定你未来是否偏向技术型人才还是管理型人才。如果这些问题没有了解清楚，如何给自己的薪资报价?  <br />
                    详细询问这些问题后，你再报出期望薪资都不迟。
                    <div className="like">
                        <i className="iconfont icon-xin" ></i>&nbsp;&nbsp;喜欢&nbsp;&nbsp;|&nbsp;&nbsp;376
                    </div>
                    <div className="talk">
                        <p>您的评论</p>
                        <textarea col="80" rows="6" className="pl"></textarea>
                        <button className="sub">提交</button>
                    </div> */}
                </DArticle>
                <p></p>
                <Fragment>
                    <div>
                    <ul ref={(ul) => { this.ul = ul }}>
                        {this.getTodoItem()}
                    </ul>
                        <label htmlFor="insertArea">你的评论</label>
                        <input
                            id="insertArea"
                            className='input'
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                            ref={(input) => { this.input = input }}
                            type="text"
                        />
                        <button onClick={this.handleBtnClick}>提交</button>
                    </div>
                </Fragment>
            </DetailWrapper>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div>
                    <li
                        key={index}
                        onClick={this.handleItemDelete.bind(this, index)}
                        dangerouslySetInnerHTML={{ __html: item }}
                    >
                    </li>
                </div>
            )
        })
    }
    handleInputChange(e) {
        const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), //() => {
            //console.log(this.ul.querySelectorAll('div').length);
        //}
        )
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1);
            return { list }
        })
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
        this.bindEvents();

    }
    bindEvents() {
        // function pushHistory() {
        //     var state = {
        //         title: "title",
        //         url: "#"
        //     };
        //     window.history.pushState(state, "title", "#xx");
        // }
        // pushHistory();
        window.addEventListener("popstate", (e) => {
            this.props.reductionPages();
        }, false);
    }
}
const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
    page: state.getIn(['home', 'articlePage']),
    DName: state.getIn(['detail', 'DName']),
    Ddet: state.getIn(['detail', 'Ddet']),
    DArticle: state.getIn(['detail', 'DArticle']),

})
const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    },
    reductionPages(articlePage) {
        dispatch(reductionPageAction(articlePage))
    }

})
export default connect(mapState, mapDispatch)(withRouter(Detail));//让Detail有能力获取到router里面所有的内容