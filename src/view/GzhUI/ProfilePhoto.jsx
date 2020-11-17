import React,{createRef} from 'react';
import { ChangeProfileImg } from './StyleProfile'
import {Upload, message, Button} from 'antd'
import { FundOutlined } from '@ant-design/icons';

function ProfilePhoto(){
  const imgShow = createRef()
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.size < 1025*1024*5 && info.file.status !== 'uploading') {
        console.log(info.file.originFileObj);
        let reader = new FileReader();
        reader.readAsDataURL(info.file.originFileObj);
        console.log(reader);
        console.log(imgShow.current);
        reader.onloadend=()=>{
          imgShow.current.src = reader.result;
        }
      }else{
        message.success('图片文件过大，请重新选择')
      }
    },
  };
  return (
    <ChangeProfileImg>
        <p>当前头像</p>
        <div className="myPhoto">
          <img src="" alt=""/>
        </div>
        <span className="setImg">设置新头像</span>
        <span className="setFile">支持jpg、png、bmp格式，文件小于5M</span>
        <div className="border-img"></div>
        <Upload {...props} showUploadList={false} accept={".png,.jpg,.bmp"}>
          <Button icon={<FundOutlined />}>选择照片</Button>
        </Upload>
        <div className='img-contain'>
          <img alt="" ref={imgShow}/>
        </div>
        <div className="btn">
          <span>保存</span>
          <span>取消</span>
        </div>
      </ChangeProfileImg>
  )
}

  

export default ProfilePhoto;