import React, { PureComponent } from 'react';
import { WriterWrapper, WTitle, WImg, WName, Wxq, Wfor } from '../style';
import { Link } from 'react-router-dom'
class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <WTitle>推荐作者</WTitle>
                <Link to="/userInfo">
                <Wfor>
                    <WImg></WImg>
                    <WName>
                        __前端
                        <br />
                        <Wxq>写了19600字，共有293747个喜欢</Wxq>
                    </WName>
                </Wfor>
                </Link>
                <Wfor>
                    <WImg></WImg>
                    <WName>
                        Web大神
                        <br />
                        <Wxq>写了24324字，共有24342个喜欢</Wxq>
                    </WName>
                </Wfor>
                <Wfor>
                    <WImg></WImg>
                    <WName>
                        前端俱乐部
                        <br />
                        <Wxq>写了4343字，共有34335个喜欢</Wxq>
                    </WName>
                </Wfor>
                <Wfor>
                    <WImg></WImg>
                    <WName>
                        一起学前端
                        <br />
                        <Wxq>写了445字，共有2324个喜欢</Wxq>
                    </WName>
                </Wfor>
            </WriterWrapper>
        )
    }
}

export default Writer;


