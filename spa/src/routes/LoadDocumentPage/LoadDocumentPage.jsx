import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { MenuBar } from "../../components/MenuBar";
import { StepsBar } from "../../components/StepsBar";
import { Step1 } from "../../components/LoadDocument/Step1";
import { Step2 } from "../../components/LoadDocument/Step2";
import { Step3 } from "../../components/LoadDocument/Step3";
import styles from "./LoadDocumentPage.module.css";

function LoadDocumentPage() {
  return (
    <div>
      <MenuBar />
      <div className={styles.content}>
        <StepsBar />
        <Switch>
          <Route path="/load/step1" component={Step1} />
          <Route path="/load/step2" component={Step2} />
          <Route path="/load/step3" component={Step3} />
          <Redirect from="/load" to="/load/step1" />
        </Switch>
      </div>
    </div>
  );
}

export { LoadDocumentPage };
