const express = require('express')
const app = express()
const port = 4000
import {GoogleCalendarIntegration} from './repository/GoogleCloud/GoogleCalendar';
import { NotionIntegration } from './repository/NotionIntegrations/Notion';


app.get('/', (req: any, res: any)=>{
    // var gci: GoogleCalendarIntegration = new GoogleCalendarIntegration();
    // gci.listEvents;
    res.send('Hello world!')

})

app.listen(port, () =>{
    console.log('ok')
    var ni: NotionIntegration = new NotionIntegration();
    var gci: GoogleCalendarIntegration = new GoogleCalendarIntegration();

    ni.listActions();
    // gci.listEvents(gci.oAuth2Client);
})
