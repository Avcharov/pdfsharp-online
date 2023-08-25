import styled from 'vue3-styled-components';

export const Button = styled.button`
  padding: 8px 18px;
  border-radius: 10px;
  border: none;
  background-color: #2f2f2f;
  color: #83bba5;
  font-size: 18px;
  font-weight: 600;
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    background-color: #3b3b3b;
  }
  &.button{
    &_green {
      background-color: #9742d3;
      color: #cfcfcf;
      &:hover {
        background-color: #a549e7;
      }
    }
    &_navbar {
      font-size: 11px;
      margin-right: 15px;
    }
    &_mr15 {
      margin-right: 15px;
    }
    &_select-body {
      width: 100%;
    }
  }
`;

export const CrossButton = styled.div`
  height: 20px;
  width: 26px;
  cursor: pointer;

  .cross-button{
    &__stick {
        height: 2px;
        background-color: #fff;
    }
  
    &__stick_left {
        transform: translateY(10px) rotate(-45deg);
    }
  
    &__stick_right {
        transform: translateY(8px) rotate(45deg);
    }
  
    &__stick-right {
        width: 100%;
        height: 1px;
        background-color: #000;
        position: relative;
        bottom: 50%;
        transform: translateY(-50%);
    }
  }
`;

export const DropZone = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  color: #fff;
  border: 2px dashed #83bba5;
  background-color: #252525;
  transition: 0.3s ease all;

  label {
      padding: 8px 12px;
      color: #fff;
      background-color: #83bba5;
      transition: 0.3s ease all;
      cursor: pointer;
  }

  input {
      display: none;
  }

  .active-dropzone {
    color: #fff;
    border-color: #fff;
    background-color: #83bba5;

    label {
    background-color: #fff;
    color: #83bba5;
    }
}
`;

export const AppItem = styled.div`
:not(:first-child) {
    margin-top: 10px;
}
.item{
  &__header {
      padding: 12px 16px;
      background-color: #1d1d1d;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
  }
  
  &__header-text {
      color: #fff;
  }
  
  &__header-button {
      color: #fff;
      background-color: transparent;
      border: none;
      cursor: pointer;
  }
  
  &__header-button:not(:last-child) {
      margin-right: 10px;
  }
  
  &__header-button--trash {
      color: #901414;
  }
  
  &__header-button--chevron {
      color: #fff;
  }
  
  &__body {
      padding: 12px 16px;
      background-color: #282828;
  }
  
  &__body-property {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  
  &__body-property:not(:first-child) {
      margin-top: 5px;
  }
  
  &__body-property-name {
      color: #fff;
      font-weight: 600;
      font-size: 16px;
  }
  
  &__body-property-value {
      width: 50px;
      border-radius: 5px;
      border: 1px solid #fff;
      color: #fff;
      background-color: transparent;
      padding: 5px;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type=number] {
    -moz-appearance: textfield;
}
`;

export const AppSelect = styled.div`
:not(:first-child) {
  margin-top: 10px;
}
.select{
  &__header {
    padding: 12px 16px;
    background-color: #1a1a1a;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;

    &-text {
      color: #fff;
    }

    &-chevron-button {
      color: #fff;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
   
  &__body {
    padding: 12px 16px;
    background-color: #303030;

    &-items {
      margin-top: 15px;
    }
  }

}
`;

export const AppHeader = styled.div`
height: 55px;
width: 100%;
border-bottom: 1px solid #363636;
display: flex;
align-items: center;
.header{
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1140px;
  }
  &__box {
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 200px;
    color: white;
  }
  &__user {
    width: 100px;
    color: white;
  }
}
`;

export const AppNavbar = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 30px;
`;

export const AppLoginPopup = styled.div`
width: 100%;
border-radius: 20px;
background-color: #252529;
padding: 30px;

.login-form {
  &__subheader {
    color: #979fad;
  }
  &__subheader:not(:first-child) {
    margin-top: 20px;
  }
  
  &__buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
  }
  
  &__links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  
  &__link:not(:last-child){
    margin-right: 20px;
  }
  
  &__button-link {
    color: #83bba5;
    text-decoration: none;
    margin-right: 20px;
  }
  
  &__items-divider{
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  
  &__item-stick{
    width: 50%;
    height: 1px;
    background-color: #979fad;
  }
  
  &__item-or{
    padding: 0px 10px;
    color: #979fad;
  }
  
  &__input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #979fad;
    background-color: #252529;
    padding: 15px;
    color: #979fad;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 600;
  }
  
  &__icon{
    color: #979fad;
  }
}

`;

export const AppLoginPage = styled.div`
  width: 100%;
  .login-page {
    &__header {
      margin: 30px 0;
      text-align: start;
    
      & > em {
        font-size: 54px;
        line-height: 1.25;
        background: -webkit-linear-gradient(315deg, #9742d3 25%, #64ff88);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-style: normal;
      }
   }
}
`;

export const AppAddImagePopup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1052;

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.4)
  }

  .add-image-popup{
    &__container {
      position: relative;
      width: 50%;
      max-width: 600px;
      background-color: #252525;
      z-index: 1;
      border-radius: 20px;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      padding: 32px 16px;
    }

    &__header-title {
      color: #fff;
    }

    &__messages {
      padding: 16px;
      height: 450px;
      position: relative;
    }
    
    &__body {
      padding: 16px;
      height: 50px;
      background-color: #83bba5;
      text-align: center;
    }
    
    &__footer {
      padding: 16px;
      display: flex;
      justify-content: space-between;
    }
}
`;

export const AppPdfItemSidebar = styled.div`
  height: calc(100vh - 55px);
  background-color: #363636;
  width: 300px;
  padding: 10px;
  overflow-y: scroll;
`;

export const AppWelcomePage = styled.div`
  min-height: 700px;
  padding: 70px 0px;

.welcome-page {
  &__header {
    margin-top: 30px;
    text-align: center;
    font-size: 76px;
    line-height: 1.25;
    background: -webkit-linear-gradient(315deg, #9742d3 25%, #64ff88);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__subheader {
    line-height: 1.5;
    margin-top: 10px;
    text-align: center;
    color: #979797;
    font-size: 18px;
  }

  &__actions {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`;

