import api from '@/services/api';
import { defineStore } from 'pinia'

export const useComplianceStore = defineStore({
  id: 'compliance',
  state: () => ({
    termsAndCondsHTML: null,
    privacyPolicyHTML: null,
    isLoading: false,
    isError: false,
    errorsList: []
  }),

  actions: {
    async getTermsAndCondsHTML() {
      const { data } = await api.get(`/supabase/rest/v1/app_compliance?id=eq.terms-and-conditions`)
      this.termsAndCondsHTML = data[0].html
      return data
    },

    async getPrivacyPolicyHTML() {
      const { data } = await api.get(`/supabase/rest/v1/app_compliance?id=eq.privacy-policy`)
      this.privacyPolicyHTML = data[0].html
      return data
    },

    async updateTermsAndCondsHTML() {
      try {
        await api.patch(`/supabase/rest/v1/app_compliance?id=eq.terms-and-conditions`, {html: this.termsAndCondsHTML})
        return { severity: 'success', summary: "Document updated", detail: `Terms and conditions updated successfully`, life: 3000 }
      }
      catch (error) {
        return { severity: 'error', summary: "Document not updated", detail: 'Could not update terms and conditions entry', life: 3000 }
      }
    },

    async updatePrivacyPolicyHTML() {
      try {
        await api.patch(`/supabase/rest/v1/app_compliance?id=eq.privacy-policy`, {html: this.privacyPolicyHTML})
        return { severity: 'success', summary: "Document updated", detail: `Privacy policy updated successfully`, life: 3000 }
      }
      catch (error) {
        return { severity: 'error', summary: "Document not updated", detail: 'Could not update privacy policy', life: 3000 }
      }
    },

  },
})
