
import { Switch, Route } from "react-router-dom";

import Header from './component/Header/Header'
import Student from './component/Student/Student'
import Subject from './component/Subject/Subject'
import AddStudent from './component/Input/addStudent'
import AddSubject from './component/Input/addSubject'
import EditStudent from './component/Update/editStudent'
import EditSubject from './component/Update/editSubject'
import StudentDelete from './component/Delete/studentDelete'
import SubjectDelete from './component/Delete/subjectDelete'
import SubjectAssign from './component/Assign/subjectAssign'


function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 offset-md-1 mt-5">
          <Header />
          <Switch>
            <Route exact path="/student">
              <Student />
            </Route>
            <Route exact path="/subject">
              <Subject />
            </Route>
            <Route exact path="/student/add">
              <AddStudent />
            </Route>
            <Route exact path="/subject/add">
              <AddSubject />
            </Route>
            <Route exact path="/student/edit/:id" component={EditStudent}></Route>
            <Route exact path="/subject/edit/:id" component={EditSubject}></Route>

            <Route exact path="/student/delete/:id" component={StudentDelete}></Route>
            <Route exact path="/subject/delete/:id" component={SubjectDelete}></Route>

            <Route exact path="/assign/subject/:id" component={SubjectAssign}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
