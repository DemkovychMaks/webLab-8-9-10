import {Wrapper, Links,  Text} from './Footer.styles'
import {InstagramOutlined, YoutubeOutlined, FacebookOutlined, ShopOutlined} from '@ant-design/icons'

export function Footer() {
    return (
        <div style={{textAlign: 'center'}}>
            <Wrapper>
                <ShopOutlined />
                <div>
                    Branding stuff ...
                </div>
                <Links>
                    <InstagramOutlined style={{margin: '10px'}}/>
                    <YoutubeOutlined style={{margin: '10px'}}/>
                    <FacebookOutlined style={{margin: '10px'}}/>
                </Links>
            </Wrapper>
            <Text>2021 IoT @ Copyright all rights reserved</Text>
        </div>
    );
}