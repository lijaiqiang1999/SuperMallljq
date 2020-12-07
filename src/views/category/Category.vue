<template>
  <div class="wrapper">
    <ul class="content">
      <li>插槽1</li>
      <li>插槽2</li>
      <li>插槽3</li>
      <li>插槽4</li>
      <li>插槽5</li>
      <li>插槽6</li>
      <li>插槽7</li>
      <li>插槽8</li>
      <li>插槽9</li>
      <li>插槽10</li>
      <li>插槽11</li>
      <li>插槽12</li>
      <li>插槽13</li>
      <li>插槽14</li>
      <li>插槽15</li>
      <li>插槽16</li>
      <li>插槽17</li>
      <li>插槽18</li>
      <li>插槽19</li>
      <li>插槽20</li>
      <li>插槽21</li>
      <li>插槽22</li>
      <li>插槽23</li>
      <li>插槽24</li>
      <li>插槽25</li>
      <li>插槽26</li>
      <li>插槽27</li>
      <li>插槽28</li>
      <li>插槽29</li>
      <li>插槽30</li>
      <li>插槽31</li>
      <li>插槽32</li>
      <li>插槽33</li>
      <li>插槽34</li>
      <li>插槽35</li>
      <li>插槽36</li>
      <li>插槽37</li>
      <li>插槽38</li>
      <li>插槽39</li>
      <li>插槽40</li>
      <li>插槽41</li>
      <li>插槽42</li>
      <li>插槽43</li>
      <li>插槽44</li>
      <li>插槽45</li>
      <li>插槽46</li>
      <li>插槽47</li>
      <li>插槽48</li>
      <li>插槽49</li>
      <li>插槽50</li>
      <li>插槽51</li>
      <li>插槽52</li>
      <li>插槽53</li>
      <li>插槽54</li>
      <li>插槽55</li>
      <li>插槽56</li>
      <li>插槽57</li>
      <li>插槽58</li>
      <li>插槽59</li>
      <li>插槽60</li>
      <li>插槽61</li>
      <li>插槽62</li>
      <li>插槽63</li>
      <li>插槽64</li>
      <li>插槽65</li>
      <li>插槽66</li>
      <li>插槽67</li>
      <li>插槽68</li>
      <li>插槽69</li>
      <li>插槽70</li>
      <li>插槽71</li>
      <li>插槽72</li>
      <li>插槽73</li>
      <li>插槽74</li>
      <li>插槽75</li>
      <li>插槽76</li>
      <li>插槽77</li>
      <li>插槽78</li>
      <li>插槽79</li>
      <li>插槽80</li>
      <li>插槽81</li>
      <li>插槽82</li>
      <li>插槽83</li>
      <li>插槽84</li>
      <li>插槽85</li>
      <li>插槽86</li>
      <li>插槽87</li>
      <li>插槽88</li>
      <li>插槽89</li>
      <li>插槽90</li>
      <li>插槽91</li>
      <li>插槽92</li>
      <li>插槽93</li>
      <li>插槽94</li>
      <li>插槽95</li>
      <li>插槽96</li>
      <li>插槽97</li>
      <li>插槽98</li>
      <li>插槽99</li>
      <li>插槽100</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    created() {
      
    },
    mounted() {
      let wrapper = document.querySelector('.wrapper', {
        // pullUpLoad: true,
        // wheel: true,
        // scrollbar: true,
      })
      this.scroll = new BScroll(wrapper)
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;
    overflow: hidden;
  }
</style>
