
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/tb/submit/readme.md'
                import '../../../../lib/tb/submit/demo'

                
                    import PostComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/submit/demo/lists/post.js'
                    import PostCode from 'text!../../../../lib/tb/submit/demo/lists/post.js'
                    import PostMarkdown from '../../../../lib/tb/submit/demo/lists/post.md'
                    
                    import ReplyComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/submit/demo/lists/reply.js'
                    import ReplyCode from 'text!../../../../lib/tb/submit/demo/lists/reply.js'
                    import ReplyMarkdown from '../../../../lib/tb/submit/demo/lists/reply.md'
                    
                    import CommentComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/submit/demo/lists/comment.js'
                    import CommentCode from 'text!../../../../lib/tb/submit/demo/lists/comment.js'
                    import CommentMarkdown from '../../../../lib/tb/submit/demo/lists/comment.md'
                    
                    import SingleComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/submit/demo/lists/single.js'
                    import SingleCode from 'text!../../../../lib/tb/submit/demo/lists/single.js'
                    import SingleMarkdown from '../../../../lib/tb/submit/demo/lists/single.md'
                    

                const colStyle = {
                    padding: 10
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '发帖'
                    }

                    render() {
                        return (
                            <div className="_namespace">
                                <Title>{readme}</Title>

                                <Row>
                                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={PostMarkdown} code={PostCode}>
                            <PostComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={ReplyMarkdown} code={ReplyCode}>
                            <ReplyComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={CommentMarkdown} code={CommentCode}>
                            <CommentComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={SingleMarkdown} code={SingleCode}>
                            <SingleComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>

                            </div>
                        )
                    }
                }
                