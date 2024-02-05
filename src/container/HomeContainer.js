import {connect} from 'react-redux';
import {addToCart} from '../services/action/Actions'
import Home from '../components/Home'

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
//export default Home;