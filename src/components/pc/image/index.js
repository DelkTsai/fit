
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/image/readme.md'
                import '../../../../lib/pc/image/demo'

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/image/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/image/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/image/demo/lists/basic.md'
                    
                    import WideComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/image/demo/lists/wide.js'
                    import WideCode from 'text!../../../../lib/pc/image/demo/lists/wide.js'
                    import WideMarkdown from '../../../../lib/pc/image/demo/lists/wide.md'
                    

                const colStyle = {
                    padding: 10
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '图片容器'
                    }

                    render() {
                        return (
                            <div className="_namespace">
                                <Title>{readme}</Title>

                                <Row>
                                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={BasicMarkdown} code={BasicCode}>
                            <BasicComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={WideMarkdown} code={WideCode}>
                            <WideComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>

                            </div>
                        )
                    }
                }
                