# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_04_063311) do

  create_table "simulations", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "duration_of_call"
    t.integer "data_traffic_id"
    t.integer "optical_line_id"
    t.integer "service"
    t.integer "ecsite"
    t.integer "creditcard"
    t.integer "electronic_money"
    t.integer "qr_payment"
    t.integer "bank"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "current_phone"
    t.integer "generation_id"
    t.integer "family_au"
    t.integer "family_docomo"
    t.integer "family_softbank"
    t.index ["user_id"], name: "index_simulations_on_user_id"
  end

  create_table "situations", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "duration_of_call"
    t.integer "data_traffic"
    t.integer "family_mobile"
    t.integer "optical_line"
    t.integer "service"
    t.integer "ecsite"
    t.integer "creditcard"
    t.integer "electronic_money"
    t.integer "qr_payment"
    t.integer "bank"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_situations_on_user_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "user_id", default: "", null: false
    t.string "nickname", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "simulations", "users"
  add_foreign_key "situations", "users"
end
