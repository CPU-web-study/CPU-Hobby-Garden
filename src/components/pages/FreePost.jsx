import React from "react";
import styled from "styled-components";


const BoardList = styled.div`
  
    width:60%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 auto;
    display:flex;
    
`;


const styles = {
    wrapper: {
        
        width: "100%",
        margin : 8,
        padding : 8,
        display : "flex",
        flexDirection : "row",
        border : "1px solid gray",
        borderRadius: 16,
        backgroundColor: "whitesmoke",
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class FreePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <BoardList>

                
                <div style={styles.wrapper}>
                    <span style={styles.messageText}>{this.props.message}</span>
                </div>
                

            </BoardList>
            
        )
    }
}

export default FreePost;