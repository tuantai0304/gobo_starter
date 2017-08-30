/**
 * List of Recipes for a Meal Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import * as RecipeActions from '@redux/recipes/actions';

// Components
import Loading from '@components/general/Loading';
import RecipeListingRender from './ListingView';

/* Redux ==================================================================== */
// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  recipes: state.recipe.recipes || [],
});

// Any actions to map to the component?
const mapDispatchToProps = {
  getRecipes: RecipeActions.getRecipes,
};

/* Component ==================================================================== */
class MealListing extends Component {
  static componentName = 'MealListing';

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object),
    meal: PropTypes.string.isRequired,
    getRecipes: PropTypes.func.isRequired,
  }

  static defaultProps = {
    recipes: [],
  }

  state = {
    loading: false,
    recipes: [],
  }

  componentDidMount = () => this.getThisMealsRecipes(this.props.recipes);
  componentWillReceiveProps = props => this.getThisMealsRecipes(props.recipes);

  /**
    * Pick out recipes that are in the current meal
    * And hide loading state
    */
  getThisMealsRecipes = (allRecipes) => {
    // if (allRecipes.length > 0) {
      // const recipes = allRecipes.filter(recipe =>
      //   recipe.category.toString() === this.props.meal.toString(),
      // );

      const recipes = [ {
            "author" : "John Smith",
            "body" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "category" : 1,
            "id" : 1,
            "image" : "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-1.jpg?alt=media&token=9f7c839b-2d40-4660-a2a0-bf6c2f64a2e5",
            "ingredients" : [ "sed do eiusmod tempor incididunt", "aute irure dolor in", "do eiusmod tempor", "uis aute irure dolor in", "doloremque laudantium", "cupidatat non proident" ],
            "method" : [ "iste natus error sit voluptatem accusantium doloremque laudantium", "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", "sed quia non numquam eius modi tempora incidunt ut labore" ],
            "slug" : "this-is-an-article",
            "title" : "This is an Article"
          }, {
            "author" : "Jane Doe",
            "body" : "Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "category" : 2,
            "id" : 2,
            "image" : "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-2.jpg?alt=media&token=6ed1740b-529b-4772-9a92-615e92b544b2",
            "ingredients" : [ "sed do eiusmod tempor incididunt", "aute irure dolor in", "do eiusmod tempor", "uis aute irure dolor in", "doloremque laudantium", "cupidatat non proident" ],
            "method" : [ "iste natus error sit voluptatem accusantium doloremque laudantium", "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", "sed quia non numquam eius modi tempora incidunt ut labore" ],
            "slug" : "dummy-text-of-the-printing",
            "title" : "Dummy text of the printing"
          }, {
            "author" : "Jane Doe",
            "body" : "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "category" : 1,
            "id" : 3,
            "image" : "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-3.jpg?alt=media&token=ad0c1913-fd82-48fa-937c-4298875544fa",
            "ingredients" : [ "sed do eiusmod tempor incididunt", "aute irure dolor in", "do eiusmod tempor", "uis aute irure dolor in", "doloremque laudantium", "cupidatat non proident" ],
            "method" : [ "iste natus error sit voluptatem accusantium doloremque laudantium", "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", "sed quia non numquam eius modi tempora incidunt ut labore" ],
            "slug" : "survived-not-only-five",
            "title" : "Survived not only five"
          }, {
            "author" : "John Smith",
            "body" : "Has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "category" : 2,
            "id" : 4,
            "image" : "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-4.jpg?alt=media&token=52d5ab1a-98af-42cb-adaf-da04666a7953",
            "ingredients" : [ "sed do eiusmod tempor incididunt", "aute irure dolor in", "do eiusmod tempor", "uis aute irure dolor in", "doloremque laudantium", "cupidatat non proident" ],
            "method" : [ "iste natus error sit voluptatem accusantium doloremque laudantium", "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", "sed quia non numquam eius modi tempora incidunt ut labore" ],
            "slug" : "standard-dummy-text-ever",
            "title" : "Standard dummy text ever"
          }, {
            "author" : "John Smith",
            "body" : "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "category" : 2,
            "id" : 5,
            "image" : "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-1.jpg?alt=media&token=9f7c839b-2d40-4660-a2a0-bf6c2f64a2e5",
            "ingredients" : [ "sed do eiusmod tempor incididunt", "aute irure dolor in", "do eiusmod tempor", "uis aute irure dolor in", "doloremque laudantium", "cupidatat non proident" ],
            "method" : [ "iste natus error sit voluptatem accusantium doloremque laudantium", "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", "sed quia non numquam eius modi tempora incidunt ut labore" ],
            "slug" : "remaining-essentially-unchanged",
            "title" : "Remaining essentially unchanged"
          }, {
            "author" : "John Smith",
            "body" : "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "category" : 2,
            "id" : 6,
            "image" : "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-2.jpg?alt=media&token=6ed1740b-529b-4772-9a92-615e92b544b2",
            "ingredients" : [ "sed do eiusmod tempor incididunt", "aute irure dolor in", "do eiusmod tempor", "uis aute irure dolor in", "doloremque laudantium", "cupidatat non proident" ],
            "method" : [ "iste natus error sit voluptatem accusantium doloremque laudantium", "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", "sed quia non numquam eius modi tempora incidunt ut labore" ],
            "slug" : "only-five-centuries",
            "title" : "Only five centuries"
          }, {
            "author" : "Jane Doe",
            "body" : "Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "category" : 1,
            "id" : 7,
            "image" : "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-1.jpg?alt=media&token=9f7c839b-2d40-4660-a2a0-bf6c2f64a2e5",
            "ingredients" : [ "aute irure dolor in", "sed do eiusmod tempor incididunt", "do eiusmod tempor", "uis aute irure dolor in", "doloremque laudantium", "cupidatat non proident" ],
            "method" : [ "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", "iste natus error sit voluptatem accusantium doloremque laudantium", "sed quia non numquam eius modi tempora incidunt ut labore" ],
            "slug" : "but-also-the-leap-into",
            "title" : "But also the leap into"
          }, {
            "author" : "John Smith",
            "body" : "Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "category" : 2,
            "id" : 8,
            "image" : "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-1.jpg?alt=media&token=9f7c839b-2d40-4660-a2a0-bf6c2f64a2e5",
            "ingredients" : [ "sed do eiusmod tempor incididunt", "aute irure dolor in", "do eiusmod tempor", "uis aute irure dolor in", "doloremque laudantium", "cupidatat non proident" ],
            "method" : [ "iste natus error sit voluptatem accusantium doloremque laudantium", "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", "sed quia non numquam eius modi tempora incidunt ut labore" ],
            "slug" : "electronic-typesetting",
            "title" : "Electronic typesetting"
          }, {
            "author" : "John Smith",
            "body" : "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "category" : 2,
            "id" : 9,
            "image" : "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-2.jpg?alt=media&token=6ed1740b-529b-4772-9a92-615e92b544b2",
            "ingredients" : [ "sed do eiusmod tempor incididunt", "aute irure dolor in", "do eiusmod tempor", "uis aute irure dolor in", "doloremque laudantium", "cupidatat non proident" ],
            "method" : [ "iste natus error sit voluptatem accusantium doloremque laudantium", "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", "sed quia non numquam eius modi tempora incidunt ut labore" ],
            "slug" : "essentially-unchanged",
            "title" : "Essentially unchanged"
          }, {
            "author" : "Jane Doe",
            "body" : "Unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "category" : 2,
            "id" : 10,
            "image" : "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-1.jpg?alt=media&token=9f7c839b-2d40-4660-a2a0-bf6c2f64a2e5",
            "ingredients" : [ "sed do eiusmod tempor incididunt", "aute irure dolor in", "do eiusmod tempor", "uis aute irure dolor in", "doloremque laudantium", "cupidatat non proident" ],
            "method" : [ "iste natus error sit voluptatem accusantium doloremque laudantium", "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", "sed quia non numquam eius modi tempora incidunt ut labore" ],
            "slug" : "standard-text",
            "title" : "Standard text"
          }, {
            "author" : "John Smith",
            "body" : "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "category" : 2,
            "id" : 11,
            "image" : "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-3.jpg?alt=media&token=ad0c1913-fd82-48fa-937c-4298875544fa",
            "ingredients" : [ "sed do eiusmod tempor incididunt", "aute irure dolor in", "do eiusmod tempor", "uis aute irure dolor in", "doloremque laudantium", "cupidatat non proident" ],
            "method" : [ "iste natus error sit voluptatem accusantium doloremque laudantium", "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", "sed quia non numquam eius modi tempora incidunt ut labore" ],
            "slug" : "but-also",
            "title" : "But also"
          }, {
            "author" : "John Smith",
            "body" : "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "category" : 2,
            "id" : 12,
            "image" : "https://firebasestorage.googleapis.com/v0/b/react-native-starter-app.appspot.com/o/image-2.jpg?alt=media&token=6ed1740b-529b-4772-9a92-615e92b544b2",
            "ingredients" : [ "sed do eiusmod tempor incididunt", "aute irure dolor in", "do eiusmod tempor", "uis aute irure dolor in", "doloremque laudantium", "cupidatat non proident" ],
            "method" : [ "iste natus error sit voluptatem accusantium doloremque laudantium", "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet", "sed quia non numquam eius modi tempora incidunt ut labore" ],
            "slug" : "text-but-also",
            "title" : "Text But also"
          } ]
          ;

      this.setState({
        recipes,
        loading: false,
      });
    // }
  }

  /**
    * Fetch Data from API
    */
  fetchRecipes = () => this.props.getRecipes()
    .then(() => this.setState({ error: null, loading: false }))
    .catch(err => this.setState({ error: err.message, loading: false }))

  render = () => {
    if (this.state.loading) return <Loading />;

    return (
      <RecipeListingRender
        recipes={this.state.recipes}
        reFetch={this.fetchRecipes}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealListing);
