import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='41fd14a1-c1f1-4b60-afe6-35c5bf81efcb'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage
