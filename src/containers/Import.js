import { connect } from 'react-redux';
import Import from '../components/Import';
import { fetchMakes, deleteMake } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    makes: state.makes
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    fetchMakes: () => dispatch(fetchMakes()),
    deleteMake: (index) => dispatch(deleteMake(index))
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Import)