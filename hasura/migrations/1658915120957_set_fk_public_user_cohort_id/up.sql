alter table "public"."user"
  add constraint "user_cohort_id_fkey"
  foreign key ("cohort_id")
  references "public"."cohort"
  ("id") on update restrict on delete restrict;
