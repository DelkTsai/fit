
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/tree/readme.md'
                import '../../../../lib/pc/tree/demo'

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/tree/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/tree/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/tree/demo/lists/basic.md'
                    
                    import ExpendAllComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/tree/demo/lists/expend-all.js'
                    import ExpendAllCode from 'text!../../../../lib/pc/tree/demo/lists/expend-all.js'
                    import ExpendAllMarkdown from '../../../../lib/pc/tree/demo/lists/expend-all.md'
                    

                const colStyle = {
                    padding: 10
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '树形控件'
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
                        <CodeView md={ExpendAllMarkdown} code={ExpendAllCode}>
                            <ExpendAllComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>

                            </div>
                        )
                    }
                }
                