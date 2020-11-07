<template>
<div class="header_background">
  <div class="header_body_home">
    <div class="header_text_box">
      <div style="height:120px"></div>
      <vue-typer
      :text='["We are clould solution provider...","We are Cloudnifier."]'
      :repeat='0'
      :shuffle='false'
      initial-action='typing'
      :pre-type-delay='70'
      :type-delay='58'
      :pre-erase-delay='300'
      :erase-delay='100'
      erase-style='backspace'
      :erase-on-complete='false'
      caret-animation='solid'></vue-typer>
      <p>Cloudnifier helps organizations of all sizes and all industries take full
        advantage of cloud with leading vendor technology, best-practice solutions
          and industry-specific knowhow. By cloudifying business processes and
          services, organizations can digitalize their operations, automate workflows
            and deliver profitable new innovations with unprecedented connectivity.
            Using sophisticated, analytic-based applications, organizations can
              fundamentally enhance their business agility and maintain competitiveness
              to drive growth and meet ever-evolving market changes.
      </p>
      <div class="header_btn_box">
        <div class="header_btn header_btn_white">LEARN MORE</div>
        <div class="header_btn header_btn_yellow">REQUEST DEMO</div>
      </div>
    </div>
  </div>
  <div class="particles_box">
  <vue-particles
      color="#dedede"
      :particleOpacity="0.8"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="1.5"
      linesColor="#ffffff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.8"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    </div>
  <div class="cloud_svg"></div>
</div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: 'TheHeader',
  components: {
    VueTyper
  },
  props: {

  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>
