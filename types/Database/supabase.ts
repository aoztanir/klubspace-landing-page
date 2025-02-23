export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      announcements: {
        Row: {
          active_until: string
          content: string
          created_at: string
          created_by: string
          discord_message_id: number | null
          id: string
          organization_id: string
          platforms: Database["public"]["Enums"]["ANNOUNCEMENT_PLATFORMS"][]
          priority: Database["public"]["Enums"]["ANNOUNCEMENT_PRIORITY"]
          public: boolean
          title: string | null
        }
        Insert: {
          active_until: string
          content: string
          created_at?: string
          created_by: string
          discord_message_id?: number | null
          id?: string
          organization_id: string
          platforms: Database["public"]["Enums"]["ANNOUNCEMENT_PLATFORMS"][]
          priority: Database["public"]["Enums"]["ANNOUNCEMENT_PRIORITY"]
          public: boolean
          title?: string | null
        }
        Update: {
          active_until?: string
          content?: string
          created_at?: string
          created_by?: string
          discord_message_id?: number | null
          id?: string
          organization_id?: string
          platforms?: Database["public"]["Enums"]["ANNOUNCEMENT_PLATFORMS"][]
          priority?: Database["public"]["Enums"]["ANNOUNCEMENT_PRIORITY"]
          public?: boolean
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "announcements_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "announcements_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      attendance: {
        Row: {
          checked_in_by: string
          checkin_method: Database["public"]["Enums"]["CHECKIN_METHOD"]
          event_id: string
          excused: boolean
          organization_id: string
          user_id: string
        }
        Insert: {
          checked_in_by: string
          checkin_method: Database["public"]["Enums"]["CHECKIN_METHOD"]
          event_id: string
          excused: boolean
          organization_id: string
          user_id: string
        }
        Update: {
          checked_in_by?: string
          checkin_method?: Database["public"]["Enums"]["CHECKIN_METHOD"]
          event_id?: string
          excused?: boolean
          organization_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "attendance_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      custom_signup_forms: {
        Row: {
          custom_fields: Json
          id: string
          organization_id: string
        }
        Insert: {
          custom_fields: Json
          id?: string
          organization_id: string
        }
        Update: {
          custom_fields?: Json
          id?: string
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "custom_signup_forms_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      custom_signup_forms_submissions: {
        Row: {
          created_at: string
          custom_fields_responses: Json
          id: string
          organization_id: string
          signup_form_id: string
          user_id: string
        }
        Insert: {
          created_at: string
          custom_fields_responses: Json
          id?: string
          organization_id: string
          signup_form_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          custom_fields_responses?: Json
          id?: string
          organization_id?: string
          signup_form_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "custom_signup_forms_submissions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "custom_signup_forms_submissions_signup_form_id_fkey"
            columns: ["signup_form_id"]
            isOneToOne: false
            referencedRelation: "custom_signup_forms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "custom_signup_forms_submissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      events_categories: {
        Row: {
          id: string
          name: string
          organization_id: string
        }
        Insert: {
          id?: string
          name: string
          organization_id: string
        }
        Update: {
          id?: string
          name?: string
          organization_id?: string
        }
        Relationships: []
      }
      events_categories_to_events_tags: {
        Row: {
          category_id: string
          tag_id: string
        }
        Insert: {
          category_id: string
          tag_id: string
        }
        Update: {
          category_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_categories_to_events_tags_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: true
            referencedRelation: "events_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_categories_to_events_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "events_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      events_data: {
        Row: {
          attendance_required: boolean | null
          category_id: string | null
          id: string
          organization_id: string
          public: boolean
        }
        Insert: {
          attendance_required?: boolean | null
          category_id?: string | null
          id: string
          organization_id: string
          public: boolean
        }
        Update: {
          attendance_required?: boolean | null
          category_id?: string | null
          id?: string
          organization_id?: string
          public?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "events_data_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "events_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      events_rsvps: {
        Row: {
          event_id: string
          organization_id: string
          status: Database["public"]["Enums"]["RSVP_STATUS"]
          user_id: string
        }
        Insert: {
          event_id: string
          organization_id: string
          status: Database["public"]["Enums"]["RSVP_STATUS"]
          user_id: string
        }
        Update: {
          event_id?: string
          organization_id?: string
          status?: Database["public"]["Enums"]["RSVP_STATUS"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_rsvps_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_rsvps_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      events_tags: {
        Row: {
          id: string
          name: string
          organization_id: string
        }
        Insert: {
          id?: string
          name: string
          organization_id: string
        }
        Update: {
          id?: string
          name?: string
          organization_id?: string
        }
        Relationships: []
      }
      events_to_events_tags: {
        Row: {
          event_id: string
          tag_id: string
        }
        Insert: {
          event_id: string
          tag_id: string
        }
        Update: {
          event_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_to_events_tags_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: true
            referencedRelation: "events_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_to_events_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "events_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      membership_groups: {
        Row: {
          color: string
          id: string
          name: string
          organization_id: string
          public: boolean
        }
        Insert: {
          color: string
          id?: string
          name: string
          organization_id: string
          public: boolean
        }
        Update: {
          color?: string
          id?: string
          name?: string
          organization_id?: string
          public?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "membership_groups_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      membership_tiers: {
        Row: {
          id: string
          name: string
          organization_id: string
          stripe_price_id: string | null
          stripe_product_id: string | null
        }
        Insert: {
          id?: string
          name: string
          organization_id: string
          stripe_price_id?: string | null
          stripe_product_id?: string | null
        }
        Update: {
          id?: string
          name?: string
          organization_id?: string
          stripe_price_id?: string | null
          stripe_product_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "membership_tiers_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      membership_tiers_settings: {
        Row: {
          allowed_emails: string[] | null
          application_based_admission: boolean
          custom_signup_form_id: string | null
          enabled: boolean
          member_limit: number | null
          membership_period: Database["public"]["Enums"]["MEMBERSHIP_PERIOD"]
          membership_year: string
          organization_id: string
          signups_closed_at: string
          signups_open_at: string
          tier_id: string
          waitlist_enabled: boolean
          waitlist_limit: number | null
        }
        Insert: {
          allowed_emails?: string[] | null
          application_based_admission: boolean
          custom_signup_form_id?: string | null
          enabled: boolean
          member_limit?: number | null
          membership_period: Database["public"]["Enums"]["MEMBERSHIP_PERIOD"]
          membership_year: string
          organization_id: string
          signups_closed_at: string
          signups_open_at: string
          tier_id: string
          waitlist_enabled: boolean
          waitlist_limit?: number | null
        }
        Update: {
          allowed_emails?: string[] | null
          application_based_admission?: boolean
          custom_signup_form_id?: string | null
          enabled?: boolean
          member_limit?: number | null
          membership_period?: Database["public"]["Enums"]["MEMBERSHIP_PERIOD"]
          membership_year?: string
          organization_id?: string
          signups_closed_at?: string
          signups_open_at?: string
          tier_id?: string
          waitlist_enabled?: boolean
          waitlist_limit?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "membership_tiers_settings_custom_signup_form_id_fkey"
            columns: ["custom_signup_form_id"]
            isOneToOne: false
            referencedRelation: "custom_signup_forms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "membership_tiers_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "membership_tiers_settings_tier_id_fkey"
            columns: ["tier_id"]
            isOneToOne: true
            referencedRelation: "membership_tiers"
            referencedColumns: ["id"]
          },
        ]
      }
      membership_tiers_to_membership_groups: {
        Row: {
          group_id: string
          tier_id: string
        }
        Insert: {
          group_id: string
          tier_id: string
        }
        Update: {
          group_id?: string
          tier_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "membership_tiers_to_membership_groups_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "membership_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "membership_tiers_to_membership_groups_tier_id_fkey"
            columns: ["tier_id"]
            isOneToOne: false
            referencedRelation: "membership_tiers"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          banner_path: string
          colors: Json
          contact: string | null
          description: string
          id: string
          links: Json | null
          logo_path: string
          name: string
          school_id: string
          website: string | null
        }
        Insert: {
          banner_path: string
          colors: Json
          contact?: string | null
          description: string
          id?: string
          links?: Json | null
          logo_path: string
          name: string
          school_id: string
          website?: string | null
        }
        Update: {
          banner_path?: string
          colors?: Json
          contact?: string | null
          description?: string
          id?: string
          links?: Json | null
          logo_path?: string
          name?: string
          school_id?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organizations_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations_roles: {
        Row: {
          id: string
          name: string
          organization_id: string
          public: boolean
        }
        Insert: {
          id?: string
          name: string
          organization_id: string
          public: boolean
        }
        Update: {
          id?: string
          name?: string
          organization_id?: string
          public?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "organizations_roles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations_roles_to_permissions: {
        Row: {
          organization_id: string
          permission: Database["public"]["Enums"]["ORGANIZATION_PERMISSION"]
          role_id: string
        }
        Insert: {
          organization_id: string
          permission: Database["public"]["Enums"]["ORGANIZATION_PERMISSION"]
          role_id: string
        }
        Update: {
          organization_id?: string
          permission?: Database["public"]["Enums"]["ORGANIZATION_PERMISSION"]
          role_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organizations_roles_to_permissions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organizations_roles_to_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "organizations_roles"
            referencedColumns: ["id"]
          },
        ]
      }
      schools: {
        Row: {
          abbreviation: string
          geospatial_location: unknown
          id: string
          name: string
        }
        Insert: {
          abbreviation: string
          geospatial_location: unknown
          id?: string
          name: string
        }
        Update: {
          abbreviation?: string
          geospatial_location?: unknown
          id?: string
          name?: string
        }
        Relationships: []
      }
      user_per_organization_email_preferences: {
        Row: {
          organization_id: string
          preference: Database["public"]["Enums"]["EMAIL_PREFERENCE"]
          user_id: string
        }
        Insert: {
          organization_id: string
          preference: Database["public"]["Enums"]["EMAIL_PREFERENCE"]
          user_id: string
        }
        Update: {
          organization_id?: string
          preference?: Database["public"]["Enums"]["EMAIL_PREFERENCE"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_per_organization_email_preferences_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_per_organization_email_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          auth_id: string
          first_name: string
          id: string
          last_name: string
          middle_name: string | null
        }
        Insert: {
          auth_id: string
          first_name: string
          id?: string
          last_name: string
          middle_name?: string | null
        }
        Update: {
          auth_id?: string
          first_name?: string
          id?: string
          last_name?: string
          middle_name?: string | null
        }
        Relationships: []
      }
      users_school_emails: {
        Row: {
          email: string
          name: string | null
          school_id: string
          user_id: string
        }
        Insert: {
          email: string
          name?: string | null
          school_id: string
          user_id: string
        }
        Update: {
          email?: string
          name?: string | null
          school_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_school_emails_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_school_emails_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users_to_organizations: {
        Row: {
          custom_signup_form_submission_id: string | null
          dues_paid_at: string | null
          membership_period: Database["public"]["Enums"]["MEMBERSHIP_PERIOD"]
          membership_status: Database["public"]["Enums"]["MEMBER_STATUS"]
          membership_tier_id: string
          membership_year: string
          met_attendance_requirements: boolean
          organization_id: string
          signed_up_at: string
          stripe_price_id: string | null
          user_id: string
        }
        Insert: {
          custom_signup_form_submission_id?: string | null
          dues_paid_at?: string | null
          membership_period: Database["public"]["Enums"]["MEMBERSHIP_PERIOD"]
          membership_status: Database["public"]["Enums"]["MEMBER_STATUS"]
          membership_tier_id: string
          membership_year: string
          met_attendance_requirements?: boolean
          organization_id: string
          signed_up_at?: string
          stripe_price_id?: string | null
          user_id: string
        }
        Update: {
          custom_signup_form_submission_id?: string | null
          dues_paid_at?: string | null
          membership_period?: Database["public"]["Enums"]["MEMBERSHIP_PERIOD"]
          membership_status?: Database["public"]["Enums"]["MEMBER_STATUS"]
          membership_tier_id?: string
          membership_year?: string
          met_attendance_requirements?: boolean
          organization_id?: string
          signed_up_at?: string
          stripe_price_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_to_organizations_membership_tier_id_fkey"
            columns: ["membership_tier_id"]
            isOneToOne: false
            referencedRelation: "membership_tiers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_to_organizations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_to_organizations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users_to_organizations_roles: {
        Row: {
          organization_id: string
          role_id: string
          user_id: string
        }
        Insert: {
          organization_id: string
          role_id: string
          user_id: string
        }
        Update: {
          organization_id?: string
          role_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_to_organizations_roles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_to_organizations_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "organizations_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_to_organizations_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users_to_permissions: {
        Row: {
          organization_id: string
          permission: Database["public"]["Enums"]["ORGANIZATION_PERMISSION"]
          user_id: string
        }
        Insert: {
          organization_id: string
          permission: Database["public"]["Enums"]["ORGANIZATION_PERMISSION"]
          user_id: string
        }
        Update: {
          organization_id?: string
          permission?: Database["public"]["Enums"]["ORGANIZATION_PERMISSION"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_to_permissions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_to_permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      ANNOUNCEMENT_PLATFORMS: "Discord" | "Email" | "GroupMe"
      ANNOUNCEMENT_PRIORITY: "HIGH" | "MEDIUM" | "LOW"
      CHECKIN_METHOD: "manual" | "proximity" | "qr_code"
      EMAIL_PREFERENCE: "All" | "System" | "Important" | "None"
      MEMBER_STATUS: "Admitted" | "Pending" | "Prospective" | "Waitlisted"
      MEMBERSHIP_PERIOD: "Fa" | "Sp" | "Ye"
      ORGANIZATION_PERMISSION:
        | "admin"
        | "announcements.create"
        | "announcements.edit"
      RSVP_STATUS: "Yes" | "No" | "Maybe"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

