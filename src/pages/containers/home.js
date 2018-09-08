import React, {Component} from 'react'
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';


class Home extends Component {

  state = {
    modalVisible: false,
  }

  handleModalToggle = (event) => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  render() {
    return(
      <HandleError>
        <HomeLayout>
          <Related />
          <VideoPlayer />
          <Categories categories={this.props.data.categories} handleModalToggle={this.handleModalToggle}/>
          {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal handleClick={this.handleModalToggle}>
              <h1>Holi Guaquimoli</h1>
            </Modal>
          </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }

}

export default Home;