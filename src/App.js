import { CometChat } from "@cometchat-pro/chat";
import {CometChatUI} from './cometchat-pro-react-ui-kit/CometChatWorkspace/src/components'

const appID = process.env.REACT_APP_COMETCHAT_APP_ID;
const region = process.env.REACT_APP_COMETCHAT_REGION ;
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

let authKey = process.env.REACT_APP_COMETCHAT_REGION_AUTH_KEY;
var uid = "user4";
var name = "Ahmed";

var user = new CometChat.User(uid);
user.setName(name);
CometChat.createUser(user, authKey).then(
    user => {
        console.log("user created", user);
    },error => {
        console.log("error", error);
    }
)


CometChat.login(uid, authKey).then(
  user => {
    console.log("Login Successful:", { user });    
  },
  error => {
    console.log("Login failed with exception:", { error });    
  }
);
function App() {
  return (
    <div style={{width: '800px', height:'800px' }}>
      	<CometChatUI />
      </div>
  );
}

export default App;
