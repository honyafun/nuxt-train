<template>
  <div>
    <v-row justify="center" align="center">
      <h1>Weekly Ranking</h1>
    </v-row>
    <v-row>
      <v-card>
        <v-img 
          src="http://img.youtube.com/vi/mnta9Pp2LqA/hqdefault.jpg"
          height="200px" 
          width="266px" />
        <v-card-title>
          Songs: ラブレター
        </v-card-title>
        <v-card-subtitle>
          Artist: YOASOBI
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            color="primary"
            text>
            open
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
            <v-card>
        <v-img 
          src="http://img.youtube.com/vi/mnta9Pp2LqA/hqdefault.jpg"
          height="200px" 
          width="266px" />
        <v-card-title>
          Songs: ラブレター
        </v-card-title>
        <v-card-subtitle>
          Artist: YOASOBI
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            color="primary"
            text>
            open
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
            <v-card>
        <v-img 
          src="http://img.youtube.com/vi/mnta9Pp2LqA/hqdefault.jpg"
          height="200px" 
          width="266px" />
        <v-card-title>
          Songs: ラブレター
        </v-card-title>
        <v-card-subtitle>
          Artist: YOASOBI
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            color="primary"
            text>
            open
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row>
      <ul>
        <li v-for="item in items">
          <pre>
            {{item}}
          </pre>
        </li>
      </ul>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({app}) {
    const items = await app.$axios.$get('https://www.googleapis.com/youtube/v3/search?&q=yoasobi&key=AIzaSyBWVUzFwuKM5JjFhUcI2bt26AGnIkTVfac')    
    return {
      items
    }
  }
}
</script>
