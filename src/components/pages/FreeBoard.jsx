import React from "react";
import FreePost from "./FreePost";
import styled from "styled-components";


const HobbyContainer = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #171717;
`;

const HobbyProperty = styled.div`
  margin: 15px;
  padding: 10px;
  color: #fff;
  text-align: center;
  background-color: transparent;

  cursor: pointer;
`;

const reservedNotifications = [
    {
        message: "[게임] 요새 할만한 게임 없나...",
    },
    {
        message : "[운동/건강] 헬스할 때 주의할 점",
    },
    {
        message : "[푸드] 구정문 맛집 추천",
    },
    {
      message : "[IT] 인공지능이 대세이긴 한가보다...",
    },
    {
      message : "[주식/투자] 비트코인으로 장학금 200배로 불린 썰",
    },
    {
        message : "[친목] 심심한 사람...",
    },
    {
      message : "[음악] 뉴진스 신곡 소감",
    },
    {
      message : "[영화] 파묘4 리얼 후기",
    },
    {
      message : "[기타] CPU데이 때 뭐하나요?",
    },
    {
      message : "[운동/건강] 개발자의 소중한 허리를 지켜라",
    },
    {
      message : "[기타] 기타치는 사람 있나?",
    },
  
];

var timer;

class FreeBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications,
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (

          <div>
            <HobbyContainer>
              <HobbyProperty>게임</HobbyProperty>
              <HobbyProperty>운동/건강</HobbyProperty>
              <HobbyProperty>푸드</HobbyProperty>
              <HobbyProperty>IT</HobbyProperty>
              <HobbyProperty>주식/투자</HobbyProperty>
              <HobbyProperty>친목</HobbyProperty>
              <HobbyProperty>음악</HobbyProperty>
              <HobbyProperty>영화</HobbyProperty>
              <HobbyProperty>기타</HobbyProperty>
            </HobbyContainer>

            <div>
                {this.state.notifications.map((notification) => {
                    return <FreePost message={notification.message} />;
                })}
            </div>
          </div>

          
            
        );
    }


}

export default FreeBoard;