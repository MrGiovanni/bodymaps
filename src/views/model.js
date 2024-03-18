import React, { useEffect,useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import './model.css'
import { Divider, ConfigProvider } from 'antd';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function renderRow(props) {
  const [backgroundColor, setBackgroundColor] = useState('transparent')
  const [backgroundColor1, setBackgroundColor1] = useState('transparent')
  const [backgroundColor2, setBackgroundColor2] = useState('transparent')
  const [backgroundColor3, setBackgroundColor3] = useState('transparent')
  const [backgroundColor4, setBackgroundColor4] = useState('transparent')
  const [backgroundColor5, setBackgroundColor5] = useState('transparent')
  const [backgroundColor6, setBackgroundColor6] = useState('transparent')


  const handleMouseOver = () => {
    setBackgroundColor('rgba(114, 114, 114, 0.7)')
  }
  const handleMouseOut = () => {
    setBackgroundColor('transparent')
  }
  const handleMouseOver1 = () => {
    setBackgroundColor1('rgba(114, 114, 114, 0.7)')
  }
  const handleMouseOut1 = () => {
    setBackgroundColor1('transparent')
  }
  const handleMouseOver2 = () => {
    setBackgroundColor2('rgba(114, 114, 114, 0.7)')
  }
  const handleMouseOut2 = () => {
    setBackgroundColor2('transparent')
  }
  const handleMouseOver3 = () => {
    setBackgroundColor3('rgba(114, 114, 114, 0.7)')
  }
  const handleMouseOut3 = () => {
    setBackgroundColor3('transparent')
  }
  const handleMouseOver4 = () => {
    setBackgroundColor4('rgba(114, 114, 114, 0.7)')
  }
  const handleMouseOut4 = () => {
    setBackgroundColor4('transparent')
  }
  const handleMouseOver5 = () => {
    setBackgroundColor5('rgba(114, 114, 114, 0.7)')
  }
  const handleMouseOut5 = () => {
    setBackgroundColor5('transparent')
  }
  const handleMouseOver6 = () => {
    setBackgroundColor6('rgba(114, 114, 114, 0.7)')
  }
  const handleMouseOut6 = () => {
    setBackgroundColor6('transparent')
  }


  return (
    <div>
    <ListItem component="div" disablePadding>
    <Card 
      sx={{ 
      width: '120%', 
      marginLeft:'10px', 
      backgroundColor:backgroundColor, 
      border:'1px solid white',
      '& .MuiTouchRipple-root': {
        color: 'rgba(255, 255, 255, 0.8)', // 设置波纹为带点透明的白色
      },
      }}>
      <CardActionArea 
        onClick={()=>{window.open('https://github.com/', '_blank');}}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        <CardContent style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <div style={{width:'30%'}}>
            <Typography style={{color:'white', fontSize:'2vw'}}>
              Dataset Name
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              image/text
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              Status:Released
            </Typography>
          </div>
          <Typography style={{color:'white', marginTop:'4px', fontSize:'1vm', width:'70%'}}>
            Description:Formerly known as crawling@home (C@H), an openly accessible 400M image-text-pair dataset
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </ListItem>
    <br/>

    <ListItem component="div" disablePadding>
    <Card 
      sx={{ 
      width: '120%', 
      marginLeft:'10px', 
      backgroundColor:backgroundColor1, 
      border:'1px solid white',
      '& .MuiTouchRipple-root': {
        color: 'rgba(255, 255, 255, 0.8)', // 设置波纹为带点透明的白色
      },
      }}>
      <CardActionArea 
        onClick={()=>{window.open('https://github.com/', '_blank');}}
        onMouseOver={handleMouseOver1}
        onMouseLeave={handleMouseOut1}
      >
        <CardContent style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <div style={{width:'30%'}}>
            <Typography style={{color:'white', fontSize:'2vw'}}>
              Dataset Name
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              image/text
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              Status:Released
            </Typography>
          </div>
          <Typography style={{color:'white', marginTop:'4px', fontSize:'1vm', width:'70%'}}>
            Description:Formerly known as crawling@home (C@H), an openly accessible 400M image-text-pair dataset
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </ListItem>
    <br/>

    <ListItem component="div" disablePadding>
    <Card 
      sx={{ 
      width: '120%', 
      marginLeft:'10px', 
      backgroundColor:backgroundColor2, 
      border:'1px solid white',
      '& .MuiTouchRipple-root': {
        color: 'rgba(255, 255, 255, 0.8)', // 设置波纹为带点透明的白色
      },
      }}>
      <CardActionArea 
        onClick={()=>{window.open('https://github.com/', '_blank');}}
        onMouseOver={handleMouseOver2}
        onMouseLeave={handleMouseOut2}
      >
        <CardContent style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <div style={{width:'30%'}}>
            <Typography style={{color:'white', fontSize:'2vw'}}>
              Dataset Name
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              image/text
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              Status:Released
            </Typography>
          </div>
          <Typography style={{color:'white', marginTop:'4px', fontSize:'1vm', width:'70%'}}>
            Description:Formerly known as crawling@home (C@H), an openly accessible 400M image-text-pair dataset
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </ListItem>
    <br/>
    
    <ListItem component="div" disablePadding>
    <Card 
      sx={{ 
      width: '120%', 
      marginLeft:'10px', 
      backgroundColor:backgroundColor3, 
      border:'1px solid white',
      '& .MuiTouchRipple-root': {
        color: 'rgba(255, 255, 255, 0.8)', // 设置波纹为带点透明的白色
      },
      }}>
      <CardActionArea 
        onClick={()=>{window.open('https://github.com/', '_blank');}}
        onMouseOver={handleMouseOver3}
        onMouseLeave={handleMouseOut3}
      >
        <CardContent style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <div style={{width:'30%'}}>
            <Typography style={{color:'white', fontSize:'2vw'}}>
              Dataset Name
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              image/text
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              Status:Released
            </Typography>
          </div>
          <Typography style={{color:'white', marginTop:'4px', fontSize:'1vm', width:'70%'}}>
            Description:Formerly known as crawling@home (C@H), an openly accessible 400M image-text-pair dataset
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </ListItem>
    <br/>

    <ListItem component="div" disablePadding>
    <Card 
      sx={{ 
      width: '120%', 
      marginLeft:'10px', 
      backgroundColor:backgroundColor4, 
      border:'1px solid white',
      '& .MuiTouchRipple-root': {
        color: 'rgba(255, 255, 255, 0.8)', // 设置波纹为带点透明的白色
      },
      }}>
      <CardActionArea 
        onClick={()=>{window.open('https://github.com/', '_blank');}}
        onMouseOver={handleMouseOver4}
        onMouseLeave={handleMouseOut4}
      >
        <CardContent style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <div style={{width:'30%'}}>
            <Typography style={{color:'white', fontSize:'2vw'}}>
              Dataset Name
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              image/text
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              Status:Released
            </Typography>
          </div>
          <Typography style={{color:'white', marginTop:'4px', fontSize:'1vm', width:'70%'}}>
            Description:Formerly known as crawling@home (C@H), an openly accessible 400M image-text-pair dataset
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </ListItem>
    <br/>

    <ListItem component="div" disablePadding>
    <Card 
      sx={{ 
      width: '120%', 
      marginLeft:'10px', 
      backgroundColor:backgroundColor5, 
      border:'1px solid white',
      '& .MuiTouchRipple-root': {
        color: 'rgba(255, 255, 255, 0.8)', // 设置波纹为带点透明的白色
      },
      }}>
      <CardActionArea 
        onClick={()=>{window.open('https://github.com/', '_blank');}}
        onMouseOver={handleMouseOver5}
        onMouseLeave={handleMouseOut5}
      >
        <CardContent style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <div style={{width:'30%'}}>
            <Typography style={{color:'white', fontSize:'2vw'}}>
              Dataset Name
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              image/text
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              Status:Released
            </Typography>
          </div>
          <Typography style={{color:'white', marginTop:'4px', fontSize:'1vm', width:'70%'}}>
            Description:Formerly known as crawling@home (C@H), an openly accessible 400M image-text-pair dataset
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </ListItem>
    <br/>

    <ListItem component="div" disablePadding>
    <Card 
      sx={{ 
      width: '120%', 
      marginLeft:'10px', 
      backgroundColor:backgroundColor6, 
      border:'1px solid white',
      '& .MuiTouchRipple-root': {
        color: 'rgba(255, 255, 255, 0.8)', // 设置波纹为带点透明的白色
      },
      }}>
      <CardActionArea 
        onClick={()=>{window.open('https://github.com/', '_blank');}}
        onMouseOver={handleMouseOver6}
        onMouseLeave={handleMouseOut6}
      >
        <CardContent style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <div style={{width:'30%'}}>
            <Typography style={{color:'white', fontSize:'2vw'}}>
              Dataset Name
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              image/text
            </Typography>
            <Typography style={{color:'white', fontSize:'1.5vw'}}>
              Status:Released
            </Typography>
          </div>
          <Typography style={{color:'white', marginTop:'4px', fontSize:'1vm', width:'70%'}}>
            Description:Formerly known as crawling@home (C@H), an openly accessible 400M image-text-pair dataset
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </ListItem>
    <br/>


    </div>
  );
}

export default function Model() {
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);
  const {
    token: { colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  useEffect(() => {
    function handleResize() {
      console.log('window.innerHeight', window.innerHeight)
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }
  )

  return (
    <div>
    <Helmet>
      <title>Models</title>
    </Helmet>
    <Layout style={{height:windowHeight}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" style={{marginTop:'30px'}}/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginBottom:'20px'}}>
            <img alt="image" src="/icon.png" className="home-branding" style={{ width: '50px',marginLeft:'10px' }} />
            <div style={{color:'white',marginLeft:'10px',fontWeight:'500',fontSize:'1.6rem'}}>ISBI</div>
          </div>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/dataset">Dataset</Link>
          </Menu.Item>
          <Menu.Item key="3" style={{backgroundColor:'#8c8c8cb7'}}>
            <Link to="/model">Model</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/leaderboard">Leaderboard</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/team">Team</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{height:windowHeight, backgroundColor:'rgb(4,21,39)'}}>
        <Content
          style={{
            margin: '20px 10px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              backgroundColor:'rgb(35,54,76)',
            }}
          >
              <h1 style={{color:'white',marginLeft:'8px',fontSize:'7vw'}}>PROJECTS</h1>
              <ConfigProvider
                theme={{
                  token: {
                   lineWidth: '2px',
                   colorSplit: 'white',
                  },
                }}
              >
                <div>
                  <Divider  orientationMargin="10" orientation="left"  style={{color:'white',fontSize:'3vw',marginTop:'-10px',fontWeight:'200'}}>Models</Divider>
                </div>
              </ConfigProvider>
              <FixedSizeList
                height={windowHeight-240}
                width={'100%'}
                itemSize={46}
                itemCount={1}
                overscanCount={5}
              >
                {renderRow}
              </FixedSizeList>
          </div>
        </Content>
      </Layout>
    </Layout>
    </div>
  );
}
