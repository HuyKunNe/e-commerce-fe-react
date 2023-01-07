import { Avatar, Box, Button, IconButton, Popover, Tooltip, Typography } from '@mui/material';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import React from 'react';
import accountIcon from '../../assets/icons/account-icon.webp';
import cartIcon from '../../assets/icons/cart-icon.webp';
import searchIcon from '../../assets/icons/search-icon.webp';
import logo from '../../assets/image/logo-left.webp';
import logoMid from '../../assets/image/logo-mid.webp';
import notificationIcon from '../../assets/icons/notification.png';
import './AppHeader.scss';

const listCategorySearch = [
  'KHÁC',
  'NEW ARIVAL',
  'TẤT CẢ',
  '"MY ANIMALS" SERIES',
  'SPRING/SUMMER 2022',
  'POPULAR LOGO',
  'SLIDES',
  'DÉP(SLIPPER)',
  'DORAEMON | LEVENTS',
  'TEE',
  'BAG',
  'PANT',
  'SHIRT',
  'ÁO',
  'QUẦN',
  'BA LÔ',
  'PHỤ KIỆN',
  'OUTERWEAR',
  'SALE',
  'BST',
  'OTHER'
]

const listPopular = [
  'Clothing',
  'Shirt',
  'Sweaters',
  'Shorts',
  'Polo',
  'Hoodies',
  'Blue',
  'T-shirt',
  'Jacket'
]

const listNotifications = [
  {
    avatar: 'https://cf.shopee.vn/file/sg-11134004-23010-ivjzotb3txlv24_tn',
    title: 'TẾT KHAO LỚN - DEAL GIẢM ĐẾN 50%',
    description: '🛒 Thời trang, công nghệ, bách hóa...😘 Sắm sửa đón tết, gì cũng sale hết',
    time: '20:45 07-01-2023'
  }, {
    avatar: 'https://cf.shopee.vn/file/sg-11134004-23010-ivjzotb3txlv24_tn',
    title: 'TẾT KHAO LỚN - DEAL GIẢM ĐẾN 50%',
    description: '🛒 Thời trang, công nghệ, bách hóa...😘 Sắm sửa đón tết, gì cũng sale hết',
    time: '20:45 07-01-2023'
  }, {
    avatar: 'https://cf.shopee.vn/file/sg-11134004-23010-ivjzotb3txlv24_tn',
    title: 'TẾT KHAO LỚN - DEAL GIẢM ĐẾN 50%',
    description: '🛒 Thời trang, công nghệ, bách hóa...😘 Sắm sửa đón tết, gì cũng sale hết',
    time: '20:45 07-01-2023'
  }, {
    avatar: 'https://cf.shopee.vn/file/sg-11134004-23010-ivjzotb3txlv24_tn',
    title: 'TẾT KHAO LỚN - DEAL GIẢM ĐẾN 50%',
    description: '🛒 Thời trang, công nghệ, bách hóa...😘 Sắm sửa đón tết, gì cũng sale hết',
    time: '20:45 07-01-2023'
  }, {
    avatar: 'https://cf.shopee.vn/file/sg-11134004-23010-ivjzotb3txlv24_tn',
    title: 'TẾT KHAO LỚN - DEAL GIẢM ĐẾN 50%',
    description: '🛒 Thời trang, công nghệ, bách hóa...😘 Sắm sửa đón tết, gì cũng sale hết',
    time: '20:45 07-01-2023'
  }
]

const AppHeader = () => {
  return (
    <div className="header-container" >
      <div className="header-main--left" >
        <a href="/">
          <img src={logo} alt="Bad Habits Official Store" width={'540rem'} />
        </a>
      </div>
      <div className="header-main--mid">
        <a href="/">
          <img src={logoMid} alt="Bad Habits Official Store" />
        </a>
      </div>
      <div className="header-main-left" style={{ paddingLeft: '15px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

          {/* Notification */}
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <Tooltip
                  variant="contained"  {...bindTrigger(popupState)}
                  className='header-main-left--item cart-icon'
                  title="Notification"
                  sx={{ margin: '0 32px 0 32px' }}
                >
                  <IconButton >
                    <img src={notificationIcon} alt="" width={40} height={40} />
                    <div className="count-holder">
                      <div className="count-text">0
                        <div className="count">
                        </div>
                      </div>
                    </div>
                  </IconButton>
                </Tooltip>
                <Popover
                  {...bindPopover(popupState)}
                  disableScrollLock={true}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  sx={{ marginTop: '10px', marginLeft: '20px' }}
                >
                  <Box className="form-notification-popover">
                    <Typography className="notification-title" variant='h7' sx={{ color: 'GrayText' }}>Thông báo mới nhận</Typography>
                    <Box className="notification-list">
                      {listNotifications.map((item) => (
                        <a href="/#" className="notification-detail">
                          <Box className="notification-item">
                            <Box className="notification-item-avatar">
                              <Avatar src={item.avatar} sx={{ width: 80, height: 80 }} className='avatar' />
                            </Box>

                            <Box className="notification-item-content">
                              <Box className="notification-item-title">
                                <Typography className="notification-item-title-text">
                                  {item.title}
                                </Typography>
                              </Box>

                              <Box className="notification-item-description">
                                <Typography className="notification-item-description-text">
                                  {item.description}
                                </Typography>
                              </Box>

                              <Box className="notification-item-time">
                                <Typography className="notification-item-time-text">
                                  {item.time}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </a>
                      ))}
                    </Box>
                    <Box className="notification-view-all">
                      <Button className="notification-view-all-btn" variant='text' href='/notifications'>
                        <Typography className="notification-view-all-text">Xem tất cả</Typography>
                      </Button>
                    </Box>
                  </Box>
                </Popover>
              </div>
            )}
          </PopupState>

          {/* Search */}
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <Tooltip
                  variant="contained"  {...bindTrigger(popupState)}
                  className='header-main-left--item'
                  title="Search"
                  sx={{ margin: '0 32px 0 32px' }}
                >
                  <IconButton>
                    <img src={searchIcon} alt="" width={40} height={40} />
                  </IconButton>
                </Tooltip>
                <Popover
                  {...bindPopover(popupState)}
                  disableScrollLock={true}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  sx={{ marginTop: '30px' }}
                >
                  <Box className="form-search-popover">
                    {/* Category search */}
                    <Box className="search-category-list">
                      {listCategorySearch.map((item) => (
                        <Box key={item} className={'search-category-item'} sx={{ marginRight: 4 }}>
                          <Button sx={{ width: 'max-content' }}>
                            <Typography sx={{ fontSize: 17 }} color="text.secondary" >
                              {item}
                            </Typography>
                          </Button>
                        </Box>
                      ))}
                    </Box>
                    {/* Search field */}
                    <Box className="search-field">
                      <input type="text" className="search-field-input" placeholder='Search...' />
                      <Button className='search-field-btn'>
                        <Typography sx={{ fontSize: 17 }} >
                          Search
                        </Typography>
                      </Button>
                    </Box>
                    {/* Popular */}
                    <Box className="search-popular">
                      <Typography className='search-popular-title' variant='h5' sx={{ color: 'GrayText' }} >Popular</Typography>
                      <Box className="search-popular-list">
                        {listPopular.map((item) => (
                          <Box key={item} className={'search-popular-item'} sx={{ marginRight: 4 }}>
                            <Button sx={{ width: 'max-content' }}>
                              <Typography className={'search-popular-item-text'} sx={{ fontSize: 14 }} color="text.secondary" >
                                {item}
                              </Typography>
                            </Button>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Popover>
              </div>
            )}
          </PopupState>


          {/* Cart */}
          <Tooltip
            href='/cart'
            className='header-main-left--item cart-icon'
            title="Cart"
            sx={{ margin: '0 32px 0 32px' }}
          >
            <IconButton >
              <img src={cartIcon} alt="" width={40} height={40} />
              <div className="count-holder">
                <div className="count-text">0
                  <div className="count">
                  </div>
                </div>
              </div>
            </IconButton>
          </Tooltip>

          {/* Account */}
          <Tooltip
            className='header-main-left--item'
            title="Account settings"
            sx={{ margin: '0 32px 0 32px' }}
          >
            <IconButton>
              <img src={accountIcon} alt="" width={40} height={40} />
            </IconButton>
          </Tooltip>
        </Box>
      </div>

    </div>


  )
}

export default AppHeader