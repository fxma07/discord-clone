import React, { useEffect, useState } from 'react'
import AuthBox from '../../components/AuthBox'
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader'
import LoginPageInputs from './LoginPageInputs'
import { validateLoginForm } from '../../components/utils/validators';

function LoginPage() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(()=>{
    setIsFormValid(validateLoginForm({
      mail, password
    }));
  }, [mail, password, setIsFormValid]);
  
  const handleLogin = () => {
    console.log(mail);
    console.log(password);
    console.log('logging in')
  }
  return (
    <AuthBox>
      <LoginPageHeader/>
      <LoginPageInputs 
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}

export default LoginPage