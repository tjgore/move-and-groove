class ActivitiesController < ApplicationController
  before_action :authenticate_user!

  def index
    @exercises = Exercise.where(user_id: current_user.id)
    @activities = Activity.all
    @user_activities = current_user.activities

    @activity_count = @user_activities.count
    @last = Exercise.where(user_id: current_user.id).order(date: :asc).last
    @done = Exercise.where(user_id: current_user.id).where(status: 'Complete').count
  end

  def activities
    @activities = Activity.all
  end

  def new
    @activities = Activity.all
    #render plain: @activities.inspect
    @exercise = Exercise.new
    if defined?(params[:id])
      @exercise.activity_id = params[:id]
    end
  end

  def create
    #render plain: exercise_params.inspect
    @exercise = Exercise.new(exercise_params)
    @exercise.user_id = current_user.id;
    if @exercise.save
      flash[:alert] = "Your activity was successfully added"
      redirect_to show_activity_path(@exercise)
    else
      render 'new'
    end
  end


  def edit
    @activities = Activity.all
    @exercise = Exercise.find(params[:id])
    #render plain: @exercise.inspect
  end

  def update
    @exercise = Exercise.find(params[:id])
    if @exercise.update(exercise_params)
      flash[:alert] = "Your Activity has been updated"
      redirect_to profile_path
    else
      render 'edit'
    end 
  end

  def show
    @exercise = Exercise.where(user_id: current_user.id).find(params[:id])
    @activity = current_user.activities.find(@exercise.activity_id)
  end

  def destroy
    @exercise = Exercise.find(params[:id])
    #render plain: @exercise.inspect
    @exercise.delete
    flash[:alert] = "Your activity has been deleted"
    redirect_to profile_path
  end

  def timer
  end

  private
  def exercise_params 
    params.require(:exercise).permit(:activity_id, :status, :duration, :date, :mood, :note)
  end


end