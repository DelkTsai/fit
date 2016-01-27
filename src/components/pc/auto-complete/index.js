
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/auto-complete/readme.md'
                import '../../../../lib/pc/auto-complete/demo'

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/auto-complete/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/auto-complete/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/auto-complete/demo/lists/basic.md'
                    

                const colStyle = {
                    padding: 10
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '自动完成'
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
                    
                                </Row>

                            </div>
                        )
                    }
                }
                