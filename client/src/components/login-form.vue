<template>
    <v-layout column>
        <v-flex>
            <v-card>
                <v-card-title primary-title>
                    <v-flex class="text-xs-center">
                        <v-icon large dark>account_circle</v-icon>
                        <h3 class="headline mb-0">Login</h3>
                    </v-flex>
                </v-card-title>
                <v-card-title primary-title>
                    <div>
                        <v-text-field
                            label="Name"
                            v-model="name"
                            :error-messages="nameErrors"
                            :counter="10"
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                            required ></v-text-field>
                        <v-text-field
                            label="E-mail"
                            v-model="email"
                            :error-messages="emailErrors"
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                            required></v-text-field>
                        <v-checkbox
                            label="Remember me"
                            v-model="checkbox"
                            @change="$v.checkbox.$touch()"
                            @blur="$v.checkbox.$touch()"></v-checkbox>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-layout>
                        <v-flex class="text-xs-center">
                            <v-btn @click="submit">submit</v-btn>
                            <v-btn @click="clear">clear</v-btn>
                        </v-flex>
                    </v-layout>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'sidebar-nav',
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    checkbox: { required }
  },
  data () {
    return {
      name: '',
      email: '',
      checkbox: false
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      this.$router.push('clients')
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  },
  computed: {
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  }
}
</script>