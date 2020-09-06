import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography} from "@material-ui/core";
import TeachCards from "./TeachCards";
import AppleIcon from '@material-ui/icons/Apple';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullwidthGrid() {
  const classes = useStyles();

  return (
    <div style={{ overflow:'hidden'}} className={classes.root}>
        <div style={{textAlign:'center', fontFamily:"Raleway"}}>
            <Typography style={{marginTop:25}} variant="h5">Your Students</Typography>
        </div>
        <br/>
        <br/>
      <Grid 
      container spacing={4}
      direction="column"
      justify="space-evenly"
      alignItems="stretch"
      >
        <Grid item xs={12}>
          <TeachCards name="Victor" title="Grade 8" icon= <AppleIcon/> label="IOS Development" time="03/14  at  3:00pm" 
          src = "https://lh3.googleusercontent.com/z3kgM4aIdH4tOXZVn4kR80DDG9mtw0cKMowkvQvrTmyrWTlwLwuolLFyeWSwziiFryCo2Z3HOZ7XWxJgq8Sv1Mm4Jgz18ppQTcjOB83py9QATbkJH-75YGEji2r5y38pP7GtTt_sGolhZ0v6-rzBACTItcNgVVh9nZdt5aZGxnpbpwAxU-wGGB5ZhX57YSXQ4px7RGfMjySX0qmnkLj-ikH4MTnwn_HVorudvPoz2Fwky0ksVxrH7s1c9wM45p5djT6BOzg4y1Xk3U0VB_NpPPDxO1maSk_pzwGQkhM6g_8-kX9y_ZnHCYIIDDlMu0U1Puezz6HBPEuhtShCsvtJJtKZQli9_e13pHONf5299P24ljkUi0HjTCE04CxpdqvtLxNU94UZnCYstmV5xsiyc2ppmKBICiLS-hvgvMakIDZzv5i0G_M15mpKfOu01cfx1D_UuWOeOMeMS5q_scCpd3F5YZ2xdNCZHuPZr1Q5nBPYL2NeE9_0HHt8GkMx4Ums6QRsmzel_AzWWrjjYzvVKTfpYMSV1zfFXRMrlOlZuDV9naeU__UK3xWzkO4472r_TnpQ-a7GZbvnrpBQ4VDmws2B_LqdLo3ks7P0Cq-xfEegF-81lphLUjSUI9hc3g0Th7QC_9cWY93zHmpalKPlqffdXdM8nD30a8wTjWqLHhsStBRIMNB-mCiod3iI=w498-h883-no?authuser=0"
          />
        </Grid>
        <Grid item xs={12}>
          <TeachCards name="Josh" title="University" icon= <YouTubeIcon/> label="Video Editing" time="08/28  at  2:00pm"
          src = "https://lh3.googleusercontent.com/DYyJPsYggqDbVAdW4NFnc3ge2kGLSsUKAPvZgARk8XGe61QG6jyuZPdMDuFLTNr0ih5BhOVQJwG6MMW7jxR8RYaGeuurBQkKKCK-0E-17YcIR23NCigcYi_BIVvYEmsKwzfLZ8TVM7VC670nq9-kojaK1cLkoMkY2frO0IRkL0MJOuECXqZPphMWUBuVFOGTiYRy1pJBsnglQauAYgQthfkuEcZDjH0RwAGaUi_37-nku0C2Il1ggVZ7QPwm48sHGIgWxPjTwryDKS3kgLU7OdUP9t6rrZ7-son9SafxizyQMNuyDjowL7kGYpWGXklZFXCnVsEJA-j0dKzI0CryRJU8nXf5zQ3Ej5odcXXpUAwiJ1D2OhT90zS-1Bu2ZkjNrGxk_BDnbehAeugLkwd0RYrs0sG_5IWERezDjx-pAZVC0wswZnZCCPjaxV8OKu30uOTh0llWqEmwXa4ndcYUVfSXRmx4yJ1H1ICX2EIhZIDWRP5AyddF0Ndq3fAhvjtDfob8GjpTUgfs2e-Yvvy6F5AcCNaaM5-oEKGC44vuzZLkCUC9xRmAjZ1WFcu5r1R1QeLJpT2XkHVDDQAEMsf4WUzNO8SWfzHkqGspjMsOEPticUZm2K5YfLs-KP1TmF5uCCq6a6R7I3PBAw5dtuzaTm8eZR3r1yBHkvzgckoBoDUnMrNoRZztnGUlYlUG=w224-h320-no?authuser=0"
          />
        </Grid>
        <Grid item xs={12}>
          <TeachCards name="Eric" title="Grade 12" icon= <WebIcon/> label="Web Development" time="09/04  at  12:00pm"
          src = "https://lh3.googleusercontent.com/sQppKryWdzrUCWg1f_EHArfxj31feJiIo8T2jIRsfJ-zZThxVod1u6o62B6wk9iYngGo5mxDugS31HroSrK0_qzXkHsszmZmsuhjbpVZrCvIzPuwazJSd5c7UXzm8CRwxmL1qEgX_4E8Irs2koubJt44QIkIlOOXsQABQBaDipx35shARtdXHuDwTbzmSkmlN-rPdAwOZfxOtskzKiJ5QjErpjrDqq0VYpjFpI4lkyxTHAMVrJtscsHCpQGxOzWRJHePUDwrfpPwkWgL608J-3WLVMk0Nav0I1ujihuLVPvQhA3KYph_OdzGbvaE1Y9ARbA1iymH9eAgyoMzJL9PXmM8HVGjCfsCF7I1eBLvIlbr_n3G0l27E8JtPzrlAqjVsogfuzmgVrtCbw2xzTX6L3LAVEXbQSPn8FN4MKc4giVVrGeE_Va_ka4Q7EZ0T8kTGA_5N6r4P7FCGGcqZsDcMXkvwHk0Vt8V_w8pwWhQ0BHnf3udFf8CPwfABq0QlW91fD2k-Hcs_kbdubB30aRVxeIU-sC1bmxhRVWc5GXAti1Pai8CRKPeTgacjx8nKKQ7-BZvocaU0iyao0Q41-4pCvT4OIjjB5-avg9GucIaeWgIBveUvDe9N8WlXEhjAYgbBq_qRdR53z1-n2elOCNN02vckzox2H88xlr4Xc9K6PsXm4hacZVeOinVuE9c=w532-h943-no?authuser=0"
          />
        </Grid>
      </Grid>
    </div>
  );
}