import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='c97f5e01-7c97-403b-bda6-8aa6aa963526'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage