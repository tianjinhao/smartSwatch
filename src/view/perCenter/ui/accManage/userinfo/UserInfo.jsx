import React, { useState, useCallback, useEffect } from 'react';
import { UserInfoWrap } from '../../StyledPerCenter'
import { Tooltip } from 'antd'

function UserInfo(props) {
  let [ name, setName ] = useState("用户659570492")
  let [ changeBool, setChangeBool ] = useState(false)
  let [ success, setSuccess ] = useState(true)
  let [ error, setError ] = useState(true)
  let [ toolBool, setToolBool ] = useState(false)
  let [ errorText, setErrorText ] = useState("")

  
  

  const handleChange = useCallback(
    (e) => {
      const reg = /^\u7528\u6237\d+/;
      const regNickName = /^([\u4E00-\u9FA5]|\w){2,25}$/;
      setName(e.target.value)
      setErrorText("")
      setSuccess(true)
      setError(false)
      console.log(regNickName.test(e.target.value));
      if(e.target.value === "") {
        setErrorText("昵称不得为空")
        setSuccess(false)
        setError(true)
        setToolBool(false)
      } else if(reg.test(e.target.value)) {
        setErrorText("昵称不能以用户+数字开头")
        setSuccess(false)
        setError(true)
        setToolBool(false)
      } else if(!regNickName.test(e.target.value)) {
        setToolBool(true)
        setSuccess(false)
        setError(true)
      } else {
        setSuccess(true)
        setToolBool(false)
        setError(false)
      }
    },
    []
  )

  useEffect(() => {
    // console.log(changeBool);
  })

  const handleChangeClick = () => {
    setChangeBool(!changeBool)
  }

  return (
    <UserInfoWrap>
      <h2>
        <span>账号管理</span>
      </h2>
      <div className="user_info">
        <div className="avatar">
          <img src="" alt=""/>
          <span>编辑头像</span>
        </div>
        <div className={changeBool ? 'user_name_wrap' : 'user_name_wrap show'}> 
          <p className="user_name">用户659570492</p>
          <div className="user_name_btn" onClick={handleChangeClick}>修改昵称</div>
        </div>
        <div  className={changeBool ? 'change_user_name show' : 'change_user_name'}>
          <Tooltip placement="right" visible={toolBool} overlayClassName="tooltip" color="#fff" title="昵称长度需要在2-25个字符之间，支持中英文、数字、下划线。">
            <input type="text" value={name} className={(success ? "success" : "") + (error ? "error" : "") }  onChange={handleChange}/>
          </Tooltip>
          <span className="error_text">
            {errorText}
          </span>
          <div className="change_user_name_btn">
            <span className="save">保存</span>
            <span className="cancel"  onClick={handleChangeClick}>取消</span>
          </div>
        </div>
      
      </div>
    </UserInfoWrap>
  );
}

export default UserInfo;