import Authorization from "./authorization/authorization";
import s from "./main.module.css";
import { Routes, Route, Navigate } from "react-router-dom";
import General from "./general/general";
import Registration from "./registration/registration";
import Changepass from "./authorization/change_pass/change_pass";
import Profile from "./profile/profile";
import PageHistory from "./pageHistory/pageHistory";
import PageToDO from "./pageToDo/pageToDo";
import PageConferention from "./pageConferencion/pageConferencion";
import PageContacts from "./pageContacts/pageContacts";
import PageMain from "./pageMain/pageMain";
import ConfirmPassword from "./authorization/change_pass/change_pass_confirm";
import Activation from "./registration/activation";

function Main() {
  return (
    <main className={s.wrapper}>
      <div>
        <Routes>
          <Route path="authorization/*" element={<Authorization />} />
          <Route path="registration" element={<Registration />} />
          <Route path="profile/*" element={<Profile />} />
          <Route
            path="/authorization/change_password"
            element={<Changepass />}
          />
          <Route path="projects/" element={<General />} />
          <Route path="history/" element={<PageHistory />} />
          <Route path="toDonikk/" element={<PageToDO />} />
          <Route path="conferencion/" element={<PageConferention />} />
          <Route path="contacts/" element={<PageContacts />} />
          <Route path="/" element={<PageMain />} />
          <Route
            path="/authorization/change_password_confirm/:uid/:token"
            element={<ConfirmPassword />}
          />
         
          <Route path="/activation/:uid/:token" element={<Activation />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
