
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/collapse/readme.md'
                import '../../../../lib/pc/collapse/demo'

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/collapse/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/collapse/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/collapse/demo/lists/basic.md'
                    
                    import AccordionComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/collapse/demo/lists/accordion.js'
                    import AccordionCode from 'text!../../../../lib/pc/collapse/demo/lists/accordion.js'
                    import AccordionMarkdown from '../../../../lib/pc/collapse/demo/lists/accordion.md'
                    

                const colStyle = {
                    padding: 10
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '折叠面板'
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
                        <CodeView md={AccordionMarkdown} code={AccordionCode}>
                            <AccordionComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>

                            </div>
                        )
                    }
                }
                