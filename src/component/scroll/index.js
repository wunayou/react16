import React from  'react'
export default class Hello extends React.Component {
    render() {
        return (
            <div className='parentScroll'>
                <div className='childScroll' onWheel={(e) => { console.log(e.nativeEvent.deltaY); e.stopPropagation(); }}>
                    Scroll LIST:1 <br /><br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                    Some text blah<br />
                </div>
                <div className='childScroll' onWheel={(e) => { console.log('Parent got scroll event'); }}>
                    Scroll LIST:2 <br /><br />
                    Hi text blah<br />
                    Hi text blah<br />
                    Hi text blah<br />
                    Hi text blah<br />
                    Hi text blah<br />
                    Hi text blah<br />
                    Hi text blah<br />
                    Hi text blah<br />
                    Hi text blah<br />
                    Hi text blah<br />
                </div>
            </div>
        );
    }
}