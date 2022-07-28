alter table "public"."user"
  add constraint "user_location_id_fkey"
  foreign key ("location_id")
  references "public"."location"
  ("id") on update restrict on delete restrict;
